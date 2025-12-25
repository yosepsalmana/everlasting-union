import { useEffect, useState } from 'react';

interface Petal {
  id: number;
  x: number;
  size: number;
  duration: number;
  delay: number;
  xEnd: number;
  rotate: number;
  color: string;
}

const petalColors = [
  'hsl(350, 50%, 70%)', // Light pink
  'hsl(38, 70%, 75%)',  // Light gold
  'hsl(350, 40%, 85%)', // Pale pink
  'hsl(38, 60%, 85%)',  // Pale gold
  'hsl(0, 60%, 90%)',   // White-pink
];

const FloatingPetals = () => {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    const generatePetals = () => {
      const newPetals: Petal[] = [];
      for (let i = 0; i < 12; i++) {
        newPetals.push({
          id: i,
          x: Math.random() * 100,
          size: 8 + Math.random() * 12,
          duration: 12 + Math.random() * 18,
          delay: Math.random() * 12,
          xEnd: (Math.random() - 0.5) * 150,
          rotate: 360 + Math.random() * 720,
          color: petalColors[Math.floor(Math.random() * petalColors.length)],
        });
      }
      setPetals(newPetals);
    };

    generatePetals();
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="absolute opacity-0"
          style={{
            left: `${petal.x}%`,
            top: '-20px',
            width: petal.size,
            height: petal.size,
            animation: `petal-float ${petal.duration}s ease-in-out infinite`,
            animationDelay: `${petal.delay}s`,
            '--petal-x': `${petal.xEnd}px`,
            '--petal-rotate': `${petal.rotate}deg`,
          } as React.CSSProperties}
        >
          <svg
            viewBox="0 0 20 20"
            fill="none"
            className="w-full h-full"
          >
            <ellipse
              cx="10"
              cy="10"
              rx="8"
              ry="5"
              fill={petal.color}
              opacity="0.8"
              transform="rotate(30 10 10)"
            />
            <ellipse
              cx="10"
              cy="10"
              rx="6"
              ry="3"
              fill={petal.color}
              opacity="0.6"
              transform="rotate(-30 10 10)"
            />
          </svg>
        </div>
      ))}
    </div>
  );
};

export default FloatingPetals;