'use client';

import { useEffect, useState } from 'react';
import { Film, Star, Heart, Zap, Brain, Skull } from 'lucide-react';

const HeroAnimation = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const icons = [
    { Icon: Film, color: 'text-blue-400', delay: '0s' },
    { Icon: Star, color: 'text-yellow-400', delay: '0.5s' },
    { Icon: Heart, color: 'text-pink-400', delay: '1s' },
    { Icon: Zap, color: 'text-purple-400', delay: '1.5s' },
    { Icon: Brain, color: 'text-green-400', delay: '2s' },
    { Icon: Skull, color: 'text-red-400', delay: '2.5s' },
  ];

  if (!mounted) return null;

  return (
    <div className="relative w-full h-64 overflow-hidden pointer-events-none">
      {/* Floating Cinema Icons */}
      <div className="absolute inset-0">
        {icons.map(({ Icon, color, delay }, index) => (
          <div
            key={index}
            className={`absolute ${color} opacity-20 animate-float`}
            style={{
              left: `${15 + (index * 12)}%`,
              top: `${20 + (index % 2) * 30}%`,
              animationDelay: delay,
              animationDuration: `${3 + (index * 0.5)}s`,
            }}
          >
            <Icon className="w-8 h-8" />
          </div>
        ))}
      </div>

      {/* Animated Film Strip */}
      <div className="absolute top-1/2 left-0 w-full h-16 transform -translate-y-1/2 opacity-10">
        <div className="flex items-center h-full animate-scroll-right">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-12 h-12 mx-2 bg-gradient-to-br from-blue-500 to-purple-500 rounded"
            />
          ))}
        </div>
      </div>

      {/* Glowing Orbs */}
      <div className="absolute inset-0">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-4 h-4 rounded-full animate-pulse-slow"
            style={{
              background: `radial-gradient(circle, ${
                ['#3b82f6', '#8b5cf6', '#ec4899', '#10b981', '#f59e0b', '#ef4444'][i]
              }, transparent)`,
              left: `${10 + i * 15}%`,
              top: `${10 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${2 + i * 0.2}s`,
            }}
          />
        ))}
      </div>

      {/* Particle System */}
      <div className="absolute inset-0">
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${1 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Gradient Waves */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] animate-spin-slow opacity-5">
          <div className="w-full h-full bg-gradient-conic from-blue-500 via-purple-500 to-pink-500 rounded-full blur-3xl" />
        </div>
      </div>
    </div>
  );
};

export default HeroAnimation;