'use client';

import { useState } from 'react';
import { User, Heart, Film, Coffee, Code2, X } from 'lucide-react';
import Image from 'next/image';

interface AboutSectionProps {
  isOpen: boolean;
  onClose: () => void;
}

const AboutSection = ({ isOpen, onClose }: AboutSectionProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative glass-card max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 hover:bg-black/80 transition-colors duration-200"
        >
          <X className="w-6 h-6 text-white" />
        </button>

        <div className="p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-purple-500 p-1 mb-6 animate-hero-float">
              <div className="w-full h-full rounded-full overflow-hidden">
                <Image
                  src="/balaji.png"
                  alt="Bali's Profile Picture"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                  priority
                  onError={(e) => {
                    console.error('Failed to load balaji.png:', e);
                  }}
                />
              </div>
            </div>
            <h2 className="text-3xl font-bold gradient-text mb-4">About Bali</h2>
            <p className="text-slate-300 text-lg">
              Developer by Day, Cinephile by Night 🎬
            </p>
          </div>

          {/* Bio - Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Left Column */}
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                  <Heart className="w-5 h-5 text-pink-400" />
                  My Cinema Journey
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  My love affair with cinema began in childhood, watching classic Tamil films with my family.
                  Over the years, I've explored movies from every corner of the world - from Korean thrillers
                  that keep you on edge to French dramas that touch your soul.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                  <Code2 className="w-5 h-5 text-blue-400" />
                  The Developer Side
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  When I'm not immersed in films, I'm crafting code and building digital experiences.
                  I believe in creating technology that serves humanity - just like how great movies
                  serve to inspire, educate, and connect us all.
                </p>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                  <Film className="w-5 h-5 text-yellow-400" />
                  Why This Collection?
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  Every movie in this collection has personally moved me in some way. I've organized them
                  by the emotions they evoke because I believe movies are best experienced when they match
                  your current mood or help you explore new emotional territories.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                  <Coffee className="w-5 h-5 text-orange-400" />
                  Quick Stats
                </h3>
                <div className="grid grid-cols-2 gap-4 text-slate-300">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-400">50+</div>
                    <div className="text-sm">Movies Watched This Year</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-400">15+</div>
                    <div className="text-sm">Countries Explored</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-pink-400">8</div>
                    <div className="text-sm">Languages</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow-400">∞</div>
                    <div className="text-sm">Passion Level</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Full Width Fun Facts */}
          <div className="space-y-6">

            <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-2">Fun Facts About Me</h3>
              <ul className="space-y-2 text-slate-300">
                <li>• I can quote entire scenes from "The Shawshank Redemption" 🎭</li>
                <li>• I've watched "Anbe Sivam" more than 20 times ❤️</li>
                <li>• I prefer subtitled films - they feel more authentic 📖</li>
                <li>• My coding playlist includes movie soundtracks 🎵</li>
                <li>• I dream of visiting every film festival around the world 🌍</li>
              </ul>
            </div>

            <div className="text-center pt-4">
              <p className="text-slate-400 italic">
                "Movies are like a machine that generates empathy." - Roger Ebert
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;