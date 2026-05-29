"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
};

export function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const context = canvas.getContext("2d");
    if (!context) {
      return;
    }

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const particles: Particle[] = [];
    let width = 0;
    let height = 0;
    let animationFrame = 0;
    let pointerX = 0;
    let pointerY = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);

      particles.length = 0;
      const count = Math.min(110, Math.floor((width * height) / 14000));
      for (let index = 0; index < count; index += 1) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.18,
          vy: (Math.random() - 0.5) * 0.18,
          radius: Math.random() * 1.8 + 0.5,
          alpha: Math.random() * 0.55 + 0.14,
        });
      }
    };

    const movePointer = (event: PointerEvent) => {
      pointerX = (event.clientX / width - 0.5) * 14;
      pointerY = (event.clientY / height - 0.5) * 14;
    };

    const draw = () => {
      context.clearRect(0, 0, width, height);
      context.fillStyle = "rgba(94, 234, 212, 0.74)";

      for (const particle of particles) {
        if (!reduceMotion) {
          particle.x += particle.vx + pointerX * 0.006;
          particle.y += particle.vy + pointerY * 0.006;
        }

        if (particle.x < -10) particle.x = width + 10;
        if (particle.x > width + 10) particle.x = -10;
        if (particle.y < -10) particle.y = height + 10;
        if (particle.y > height + 10) particle.y = -10;

        context.globalAlpha = particle.alpha;
        context.beginPath();
        context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        context.fill();
      }

      context.globalAlpha = 1;
      animationFrame = window.requestAnimationFrame(draw);
    };

    resize();
    draw();

    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", movePointer);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", movePointer);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[2] opacity-70"
    />
  );
}
