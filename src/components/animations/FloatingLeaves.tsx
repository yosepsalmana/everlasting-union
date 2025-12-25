import { useEffect, useState } from 'react';

interface Leaf {
  id: number;
  x: number;
  size: number;
  duration: number;
  delay: number;
  xEnd: number;
  rotate: number;
}

const FloatingLeaves = () => {
  const [leaves, setLeaves] = useState<Leaf[]>([]);

  useEffect(() => {
    const generateLeaves = () => {
      const newLeaves: Leaf[] = [];
      for (let i = 0; i < 8; i++) {
        newLeaves.push({
          id: i,
          x: Math.random() * 100,
          size: 12 + Math.random() * 16,
          duration: 15 + Math.random() * 20,
          delay: Math.random() * 15,
          xEnd: (Math.random() - 0.5) * 200,
          rotate: 180 + Math.random() * 360,
        });
      }
      setLeaves(newLeaves);
    };

    generateLeaves();
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      {leaves.map((leaf) => (
        <div
          key={leaf.id}
          className="absolute opacity-0"
          style={{
            left: `${leaf.x}%`,
            top: '-30px',
            width: leaf.size,
            height: leaf.size,
            animation: `leaf-float ${leaf.duration}s linear infinite`,
            animationDelay: `${leaf.delay}s`,
            '--leaf-x': `${leaf.xEnd}px`,
            '--leaf-y': '110vh',
            '--leaf-rotate': `${leaf.rotate}deg`,
          } as React.CSSProperties}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="w-full h-full animate-leaf-sway"
            style={{ animationDelay: `${leaf.delay * 0.5}s` }}
          >
            <path
              d="M12 2C6.5 2 2 6.5 2 12c0 4.5 3 8.5 7 10 0-3 1-6 3-8 2 2 3 5 3 8 4-1.5 7-5.5 7-10 0-5.5-4.5-10-10-10z"
              fill="hsl(140, 35%, 30%)"
              opacity="0.7"
            />
            <path
              d="M12 4c-3.5 0-6.5 2-8 5 1.5-1 3.5-1.5 5.5-1 0 2-0.5 4-1.5 6 1.5-1 3-1.5 4-1.5s2.5.5 4 1.5c-1-2-1.5-4-1.5-6 2-.5 4 0 5.5 1-1.5-3-4.5-5-8-5z"
              fill="hsl(140, 40%, 25%)"
              opacity="0.5"
            />
          </svg>
        </div>
      ))}
    </div>
  );
};

export default FloatingLeaves;