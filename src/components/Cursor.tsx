
import React, { useEffect, useState } from 'react';

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isClicking, setIsClicking] = useState(false);
  const [trails, setTrails] = useState<Array<{ x: number; y: number; id: number }>>([]);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Add trail effect
      const newTrail = { x: e.clientX, y: e.clientY, id: Date.now() };
      setTrails(prev => [...prev.slice(-10), newTrail]);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    document.addEventListener('mousemove', updatePosition);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <>
      {/* Cursor trails */}
      {trails.map((trail, index) => (
        <div
          key={trail.id}
          className="fixed pointer-events-none z-50 w-2 h-2 bg-cyan-400 rounded-full"
          style={{
            left: trail.x - 4,
            top: trail.y - 4,
            opacity: (index + 1) / trails.length * 0.5,
            transform: `scale(${(index + 1) / trails.length})`,
          }}
        />
      ))}
      
      {/* Main cursor */}
      <div
        className={`fixed pointer-events-none z-50 w-6 h-6 border-2 border-cyan-400 rounded-full transition-transform duration-150 ${
          isClicking ? 'scale-75 bg-cyan-400 bg-opacity-30' : 'scale-100'
        }`}
        style={{
          left: position.x - 12,
          top: position.y - 12,
          boxShadow: '0 0 20px rgba(34, 211, 238, 0.5)',
        }}
      />
      
      {/* Cursor glow */}
      <div
        className="fixed pointer-events-none z-40 w-12 h-12 bg-cyan-400 rounded-full opacity-10 blur-xl"
        style={{
          left: position.x - 24,
          top: position.y - 24,
        }}
      />
    </>
  );
};

export default Cursor;
