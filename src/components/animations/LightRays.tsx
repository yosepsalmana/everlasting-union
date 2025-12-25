const LightRays = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Main light rays from top-right */}
      <div
        className="absolute -top-20 -right-20 w-[600px] h-[800px] opacity-10 animate-light-ray"
        style={{
          background: `conic-gradient(
            from 200deg at 80% 20%,
            transparent 0deg,
            hsl(38, 70%, 60%) 10deg,
            transparent 20deg,
            transparent 40deg,
            hsl(38, 60%, 50%) 50deg,
            transparent 60deg,
            transparent 80deg,
            hsl(38, 70%, 55%) 90deg,
            transparent 100deg,
            transparent 360deg
          )`,
          filter: 'blur(30px)',
        }}
      />
      
      {/* Secondary rays from top-left */}
      <div
        className="absolute -top-10 -left-10 w-[400px] h-[600px] opacity-5 animate-light-ray"
        style={{
          background: `conic-gradient(
            from 340deg at 20% 20%,
            transparent 0deg,
            hsl(38, 60%, 50%) 15deg,
            transparent 30deg,
            transparent 60deg,
            hsl(38, 50%, 45%) 70deg,
            transparent 85deg,
            transparent 360deg
          )`,
          filter: 'blur(40px)',
          animationDelay: '2s',
        }}
      />

      {/* Ambient glow spots */}
      <div
        className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full animate-light-ray"
        style={{
          background: 'radial-gradient(circle, hsl(38, 70%, 50%) 0%, transparent 70%)',
          opacity: 0.08,
          filter: 'blur(60px)',
          animationDelay: '1s',
          animationDuration: '10s',
        }}
      />

      <div
        className="absolute bottom-1/3 left-1/3 w-48 h-48 rounded-full animate-light-ray"
        style={{
          background: 'radial-gradient(circle, hsl(38, 60%, 55%) 0%, transparent 70%)',
          opacity: 0.06,
          filter: 'blur(50px)',
          animationDelay: '3s',
          animationDuration: '12s',
        }}
      />
    </div>
  );
};

export default LightRays;