import { useEffect, useState } from 'react';

interface Bird {
  id: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  yEnd: number;
}

const FlyingBirds = () => {
  const [birds, setBirds] = useState<Bird[]>([]);

  useEffect(() => {
    const generateBirds = () => {
      const newBirds: Bird[] = [];
      for (let i = 0; i < 4; i++) {
        newBirds.push({
          id: i,
          y: 10 + Math.random() * 30,
          size: 20 + Math.random() * 15,
          duration: 25 + Math.random() * 20,
          delay: Math.random() * 20,
          yEnd: (Math.random() - 0.5) * 100,
        });
      }
      setBirds(newBirds);
    };

    generateBirds();
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      {birds.map((bird) => (
        <div
          key={bird.id}
          className="absolute opacity-0"
          style={{
            left: '-50px',
            top: `${bird.y}%`,
            animation: `bird-fly ${bird.duration}s linear infinite`,
            animationDelay: `${bird.delay}s`,
            '--bird-y': `${bird.yEnd}px`,
          } as React.CSSProperties}
        >
          <svg
            width={bird.size}
            height={bird.size * 0.5}
            viewBox="0 0 40 20"
            fill="none"
          >
            {/* Bird body */}
            <ellipse
              cx="20"
              cy="12"
              rx="8"
              ry="4"
              fill="hsl(35, 25%, 20%)"
              opacity="0.6"
            />
            {/* Left wing */}
            <path
              d="M12 12 Q 5 8, 2 4 Q 8 8, 12 10"
              fill="hsl(35, 25%, 25%)"
              opacity="0.5"
              style={{
                transformOrigin: '12px 12px',
                animation: `bird-wing 0.3s ease-in-out infinite`,
              }}
            />
            {/* Right wing */}
            <path
              d="M28 12 Q 35 8, 38 4 Q 32 8, 28 10"
              fill="hsl(35, 25%, 25%)"
              opacity="0.5"
              style={{
                transformOrigin: '28px 12px',
                animation: `bird-wing 0.3s ease-in-out infinite`,
                animationDelay: '0.15s',
              }}
            />
          </svg>
        </div>
      ))}
    </div>
  );
};

export default FlyingBirds;