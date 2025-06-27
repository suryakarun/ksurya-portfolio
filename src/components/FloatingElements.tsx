
import React, { useEffect, useState } from 'react';
import { Code, Terminal, Cpu, Database, Globe, Zap } from 'lucide-react';

const FloatingElements = () => {
  const [elements, setElements] = useState<Array<{
    id: number;
    x: number;
    y: number;
    icon: React.ComponentType<any>;
    delay: number;
  }>>([]);

  const icons = [Code, Terminal, Cpu, Database, Globe, Zap];

  useEffect(() => {
    const newElements = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      icon: icons[Math.floor(Math.random() * icons.length)],
      delay: Math.random() * 10,
    }));
    setElements(newElements);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10">
      {elements.map(({ id, x, y, icon: Icon, delay }) => (
        <div
          key={id}
          className="absolute animate-pulse"
          style={{
            left: `${x}%`,
            top: `${y}%`,
            animationDelay: `${delay}s`,
            animationDuration: '4s',
          }}
        >
          <Icon 
            size={24} 
            className="text-cyan-400 opacity-20 animate-bounce"
            style={{ animationDelay: `${delay}s` }}
          />
        </div>
      ))}
    </div>
  );
};

export default FloatingElements;
