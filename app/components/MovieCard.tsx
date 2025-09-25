'use client';

import { Movie } from '../types/movie';
import { Star, Calendar, Globe, User, Play } from 'lucide-react';
import Image from 'next/image';

interface MovieCardProps {
  movie: Movie;
  onClick: () => void;
}

const MovieCard = ({ movie, onClick }: MovieCardProps) => {
  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <Star key="half" className="w-4 h-4 fill-yellow-400/50 text-yellow-400" />
      );
    }

    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <Star key={`empty-${i}`} className="w-4 h-4 text-slate-300" />
      );
    }

    return stars;
  };

  return (
    <div
      onClick={onClick}
      className="group glass-card p-0 cursor-pointer transition-all duration-300 hover:scale-[1.02] animate-slide-up"
    >
      {/* Movie Poster */}
      <div className="relative h-64 bg-gradient-to-br from-blue-600 to-purple-600 rounded-t-2xl overflow-hidden">
        {movie.poster ? (
          <Image
            src={movie.poster}
            alt={movie.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <Play className="w-16 h-16 text-white/70" />
          </div>
        )}

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* Rating Badge */}
        <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1">
          <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
          <span className="text-white text-sm font-semibold">{movie.rating}</span>
        </div>

        {/* Language Badge */}
        <div className="absolute top-3 left-3 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
          <span className="text-white text-xs font-medium">{movie.language}</span>
        </div>
      </div>

      {/* Movie Info */}
      <div className="p-5 space-y-3">
        {/* Title & Year */}
        <div className="space-y-2">
          <h3 className="font-bold text-lg text-white group-hover:text-blue-400 transition-colors duration-300 line-clamp-2">
            {movie.title}
          </h3>

          <div className="flex items-center gap-4 text-sm text-slate-400">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{movie.year}</span>
            </div>
            <div className="flex items-center gap-1">
              <Globe className="w-4 h-4" />
              <span>{movie.language}</span>
            </div>
          </div>
        </div>

        {/* Rating Stars */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            {renderStars(movie.rating)}
          </div>
          <span className="text-sm font-semibold text-blue-400">{movie.rating}/5</span>
        </div>

        {/* Genre */}
        <div className="inline-block">
          <span className="text-xs font-medium text-purple-400 bg-purple-400/20 px-3 py-1 rounded-full border border-purple-400/30">
            {movie.genre}
          </span>
        </div>

        {/* Director */}
        <div className="flex items-center gap-2 text-sm text-slate-300">
          <User className="w-4 h-4" />
          <span className="truncate">{movie.director}</span>
        </div>

        {/* Review Preview */}
        <p className="text-sm text-slate-400 line-clamp-3 leading-relaxed">
          {movie.review}
        </p>

        {/* Hover Effect Indicator */}
        <div className="flex items-center justify-center pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex items-center gap-2 text-blue-400 font-medium text-sm">
            <Play className="w-4 h-4" />
            <span>View Details</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;