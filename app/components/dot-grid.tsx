"use client";

import { useEffect, useRef } from "react";

const SPACING = 32;
const BASE_RADIUS = 1;
const REPEL_RADIUS = 90;
const REPEL_STRENGTH = 3;
const SPRING = 0.1;
const DAMPING = 0.5;
const GLOW_RADIUS = 120;

type Dot = {
  ox: number;
  oy: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
};

export function DotGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: -999, y: -999 });
  const dots = useRef<Dot[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    let raf: number;

    const build = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      dots.current = [];
      for (let x = SPACING / 2; x < canvas.width; x += SPACING)
        for (let y = SPACING / 2; y < canvas.height; y += SPACING)
          dots.current.push({ ox: x, oy: y, x, y, vx: 0, vy: 0 });
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const { x: mx, y: my } = mouse.current;

      for (const d of dots.current) {
        const dx = d.x - mx;
        const dy = d.y - my;
        const dist = Math.sqrt(dx * dx + dy * dy) || 1;

        if (dist < REPEL_RADIUS) {
          const force = (1 - dist / REPEL_RADIUS) * REPEL_STRENGTH;
          d.vx += (dx / dist) * force;
          d.vy += (dy / dist) * force;
        }

        d.vx += (d.ox - d.x) * SPRING;
        d.vy += (d.oy - d.y) * SPRING;
        d.vx *= DAMPING;
        d.vy *= DAMPING;
        d.x += d.vx;
        d.y += d.vy;

        const proximity = Math.max(0, 1 - dist / GLOW_RADIUS);
        const r = BASE_RADIUS + proximity * 1.8;
        const alpha = 0.09 + proximity * 0.85;

        ctx.beginPath();
        ctx.arc(d.x, d.y, r, 0, Math.PI * 2);

        if (proximity > 0.05) {
          ctx.shadowColor = "rgba(167,139,250,0.9)";
          ctx.shadowBlur = proximity * 10;
          ctx.fillStyle = `rgba(255,255,255,${alpha})`;
        } else {
          ctx.shadowBlur = 0;
          ctx.fillStyle = "rgba(255,255,255,0.15)";
        }
        ctx.fill();
      }

      raf = requestAnimationFrame(draw);
    };

    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };
    const onLeave = () => {
      mouse.current = { x: -999, y: -999 };
    };

    build();
    draw();
    window.addEventListener("resize", build);
    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", build);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <>
      <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none" />
    </>
  );
}
