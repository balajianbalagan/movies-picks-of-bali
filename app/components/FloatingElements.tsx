'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const FloatingElements = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const floatingImages = [
    // LEFT SIDE ELEMENTS
    {
      src: '/camera.png',
      alt: 'Movie Camera',
      size: 120,
      side: 'left',
      initialX: '3%',
      initialY: '20%',
      floatRange: 25,
      duration: 4,
      delay: 0,
    },
    {
      src: '/cinema_glasses.png',
      alt: 'Cinema Glasses',
      size: 110,
      side: 'left',
      initialX: '8%',
      initialY: '60%',
      floatRange: 20,
      duration: 5,
      delay: 1.5,
    },
    {
      src: '/media.png',
      alt: 'Media',
      size: 115,
      side: 'left',
      initialX: '2%',
      initialY: '85%',
      floatRange: 22,
      duration: 4.5,
      delay: 0.5,
    },
    // RIGHT SIDE ELEMENTS
    {
      src: '/computer_nerd.png',
      alt: 'Computer Nerd',
      size: 130,
      side: 'right',
      initialX: '2%',
      initialY: '45%',
      floatRange: 30,
      duration: 6,
      delay: 2,
    },
    {
      src: '/cinema_glasses.png',
      alt: 'Cinema Glasses Right',
      size: 100,
      side: 'right',
      initialX: '8%',
      initialY: '70%',
      floatRange: 18,
      duration: 5.2,
      delay: 3,
    },
    {
      src: '/media.png',
      alt: 'Media Right',
      size: 95,
      side: 'right',
      initialX: '6%',
      initialY: '10%',
      floatRange: 15,
      duration: 5.5,
      delay: 2.5,
    },
  ];

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating Images */}
      {floatingImages.map((image, index) => (
        <motion.div
          key={index}
          className="absolute pointer-events-auto cursor-grab active:cursor-grabbing"
          style={{
            ...(image.side === 'left'
              ? { left: image.initialX }
              : { right: image.initialX }),
            top: image.initialY,
            width: image.size,
            height: image.size,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: 0.7,
            scale: 1,
            y: [0, -image.floatRange, 0],
            x:
              image.side === 'left'
                ? [0, image.floatRange * 0.3, 0] // float slightly right
                : [0, -image.floatRange * 0.3, 0], // float slightly left
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            opacity: { duration: 0.8, delay: image.delay },
            scale: { duration: 0.8, delay: image.delay },
            y: {
              duration: image.duration,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: image.delay,
            },
            x: {
              duration: image.duration * 1.2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: image.delay,
            },
            rotate: {
              duration: image.duration * 0.8,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: image.delay,
            },
          }}
          drag
          dragConstraints={{ left: -200, right: 200, top: -200, bottom: 200 }}
          dragElastic={0.3}
          dragMomentum={false}
          whileDrag={{
            scale: 1.2,
            rotate: 10,
            zIndex: 1000,
            cursor: 'grabbing',
          }}
          dragTransition={{ power: 0.3, timeConstant: 200 }}
          whileHover={{
            scale: 1.05,
            opacity: 0.9,
            transition: { duration: 0.2 },
          }}
        >
          <motion.div
            animate={{
              filter: [
                'drop-shadow(0 0 8px rgba(59, 130, 246, 0.3))',
                'drop-shadow(0 0 12px rgba(139, 92, 246, 0.4))',
                'drop-shadow(0 0 8px rgba(59, 130, 246, 0.3))',
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={image.size}
              height={image.size}
              className="select-none"
              draggable={false}
            />
          </motion.div>
        </motion.div>
      ))}

      {/* Floating particles (split into left and right) */}
      {Array.from({ length: 8 }).map((_, i) => {
        const isLeft = i < 4; // first half left, second half right
        return (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-2 h-2 rounded-full"
            style={{
              ...(isLeft
                ? { left: `${5 + i * 10}%` }
                : { right: `${5 + (i - 4) * 10}%` }),
              top: `${20 + (i % 3) * 30}%`,
              background: `linear-gradient(45deg, ${
                [
                  '#3b82f6',
                  '#8b5cf6',
                  '#ec4899',
                  '#10b981',
                  '#f59e0b',
                  '#ef4444',
                  '#06b6d4',
                  '#8b5cf6',
                ][i]
              }, transparent)`,
            }}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0.3, 0.8, 0.3],
              scale: [0.8, 1.2, 0.8],
              y: [0, -30, 0],
              x: isLeft ? [0, 15, 0] : [0, -15, 0], // left floats right, right floats left
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.3,
            }}
          />
        );
      })}
    </div>
  );
};

export default FloatingElements;
