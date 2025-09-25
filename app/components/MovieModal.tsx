'use client';

import { Movie } from '../types/movie';
import { X, Star, Calendar, Globe, User, Users, Award } from 'lucide-react';
import Image from 'next/image';
import { useEffect } from 'react';

interface MovieModalProps {
  movie: Movie | null;
  isOpen: boolean;
  onClose: () => void;
}

const MovieModal = ({ movie, isOpen, onClose }: MovieModalProps) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !movie) return null;

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <Star key="half" className="w-5 h-5 fill-yellow-400/50 text-yellow-400" />
      );
    }

    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <Star key={`empty-${i}`} className="w-5 h-5 text-slate-300" />
      );
    }

    return stars;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative glass-card max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 hover:bg-black/80 transition-colors duration-200"
        >
          <X className="w-6 h-6 text-white" />
        </button>

        <div className="grid lg:grid-cols-5 gap-8 p-8">
          {/* Movie Poster */}
          <div className="lg:col-span-2">
            <div className="relative aspect-[3/4] bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl overflow-hidden">
              {movie.poster ? (
                <Image
                  src={movie.poster}
                  alt={movie.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <Award className="w-24 h-24 text-white/50" />
                </div>
              )}
            </div>
          </div>

          {/* Movie Details */}
          <div className="lg:col-span-3 space-y-6">
            {/* Title & Basic Info */}
            <div className="space-y-4">
              <h1 className="text-4xl font-bold gradient-text">
                {movie.title}
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-slate-300">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-blue-400" />
                  <span className="font-medium">{movie.year}</span>
                </div>

                <div className="flex items-center gap-2">
                  <Globe className="w-5 h-5 text-green-400" />
                  <span className="font-medium">{movie.language}</span>
                </div>

                <div className="inline-block">
                  <span className="text-sm font-medium text-purple-400 bg-purple-400/20 px-4 py-2 rounded-full border border-purple-400/30">
                    {movie.genre}
                  </span>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  {renderStars(movie.rating)}
                </div>
                <div className="text-2xl font-bold text-blue-400">
                  {movie.rating}/5
                </div>
              </div>
            </div>

            {/* Director & Cast */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <User className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <div className="text-sm text-slate-400 font-medium">Director</div>
                  <div className="text-white font-semibold">{movie.director}</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Users className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <div className="text-sm text-slate-400 font-medium">Cast</div>
                  <div className="text-white font-semibold">{movie.actors}</div>
                </div>
              </div>
            </div>

            {/* Review */}
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                <Award className="w-5 h-5 text-yellow-400" />
                Bali's Review
              </h3>
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
                <p className="text-slate-300 leading-relaxed italic">
                  "{movie.review}"
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="btn-primary flex-1 sm:flex-none">
                Add to Watchlist
              </button>
              <button className="btn-secondary flex-1 sm:flex-none">
                Share Movie
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieModal;