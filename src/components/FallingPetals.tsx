import { useMemo } from 'react';

interface Petal {
  id: number;
  left: string;
  delay: string;
  duration: string;
  size: number;
  opacity: number;
  rotation: number;
}

export function FallingPetals({ active = true }: { active?: boolean }) {
  const petals = useMemo<Petal[]>(() => {
    return Array.from({ length: 18 }).map((_, i) => ({
      id: i,
      left: `${(i * 5.5 + Math.random() * 4) % 100}%`,
      delay: `${(i * 0.7).toFixed(1)}s`,
      duration: `${(7 + Math.random() * 6).toFixed(1)}s`,
      size: Math.floor(12 + Math.random() * 16),
      opacity: 0.35 + Math.random() * 0.45,
      rotation: Math.floor(Math.random() * 360),
    }));
  }, []);

  if (!active) return null;

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-10">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="absolute -top-8 animate-fall"
          style={{
            left: petal.left,
            animationDelay: petal.delay,
            animationDuration: petal.duration,
            animationIterationCount: 'infinite',
            animationTimingFunction: 'linear',
            opacity: petal.opacity,
          }}
        >
          <svg
            width={petal.size}
            height={petal.size * 1.3}
            viewBox="0 0 24 32"
            fill="none"
            style={{
              transform: `rotate(${petal.rotation}deg)`,
              filter: 'drop-shadow(0 0 6px rgba(255, 105, 180, 0.5))',
            }}
          >
            <path
              d="M12 0C7 8 0 16 0 23C0 28 5 32 12 32C19 32 24 28 24 23C24 16 17 8 12 0Z"
              fill="url(#petal-grad)"
            />
            <path
              d="M12 4C12 14 12 26 12 28"
              stroke="rgba(255, 255, 255, 0.4)"
              strokeWidth="0.75"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient id="petal-grad" x1="12" y1="0" x2="12" y2="32" gradientUnits="userSpaceOnUse">
                <stop stopColor="#ffb3d9" />
                <stop offset="0.6" stopColor="#ff4d94" />
                <stop offset="1" stopColor="#d91e6c" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      ))}
      <style>{`
        @keyframes fall {
          0% {
            transform: translateY(-20px) translateX(0px) rotate(0deg);
          }
          50% {
            transform: translateY(50vh) translateX(25px) rotate(180deg);
          }
          100% {
            transform: translateY(105vh) translateX(-15px) rotate(360deg);
          }
        }
        .animate-fall {
          animation-name: fall;
        }
      `}</style>
    </div>
  );
}
