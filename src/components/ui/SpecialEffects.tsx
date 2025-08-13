import React, { useEffect, useRef, useState } from "react";

interface Point {
  x: number;
  y: number;
}

const LiquidLine: React.FC = () => {
  const [points, setPoints] = useState<Point[]>([]);
  const target = useRef<Point>({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const isTouch = useRef(false);

  useEffect(() => {
    const updateTarget = (x: number, y: number) => {
      target.current = { x, y };
    };

    const mouseMove = (e: MouseEvent) => {
      if (!isTouch.current) {
        updateTarget(e.clientX, e.clientY);
      }
    };

    const touchMove = (e: TouchEvent) => {
      isTouch.current = true;
      const t = e.touches[0];
      updateTarget(t.clientX, t.clientY);
    };

    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("touchmove", touchMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("touchmove", touchMove);
    };
  }, []);

  useEffect(() => {
    let animationFrame: number;

    const animate = () => {
      setPoints((prev) => {
        const last = prev[0] || target.current;
        const dx = target.current.x - last.x;
        const dy = target.current.y - last.y;
        const ease = 0.25; // smoothness
        const newHead = { x: last.x + dx * ease, y: last.y + dy * ease };
        const maxPoints = Math.min(25, Math.floor(window.innerWidth / 50)); // responsive length

        return [newHead, ...prev].slice(0, maxPoints);
      });

      animationFrame = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  const pathData = points.reduce((path, point, i, arr) => {
    if (i === 0) {
      return `M ${point.x} ${point.y}`;
    }
    const prev = arr[i - 1];
    const midX = (prev.x + point.x) / 2;
    const midY = (prev.y + point.y) / 2;
    return `${path} Q ${prev.x} ${prev.y} ${midX} ${midY}`;
  }, "");

  return (
    <svg
      className="fixed inset-0 pointer-events-none z-50"
      style={{ width: "100%", height: "100%" }}
    >
      <defs>
        <linearGradient id="lineGradient" gradientTransform="rotate(90)">
          <stop offset="0%" stopColor="#00fff9" />
          <stop offset="50%" stopColor="#a855f7" />
          <stop offset="100%" stopColor="#ff00c1" />
        </linearGradient>
      </defs>
      <path
        d={pathData}
        fill="none"
        stroke="url(#lineGradient)"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{
          filter: "drop-shadow(0 0 8px #00fff9) drop-shadow(0 0 15px #a855f7)",
        }}
      />
    </svg>
  );
};

export default LiquidLine;
