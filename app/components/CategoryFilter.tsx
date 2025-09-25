'use client';

import { MovieCategory } from '../types/movie';

interface CategoryFilterProps {
  categories: MovieCategory[];
  activeCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

const CategoryFilter = ({ categories, activeCategory, onCategoryChange }: CategoryFilterProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={`
            relative group px-6 py-3 rounded-2xl font-semibold transition-all duration-300 min-w-fit
            ${
              activeCategory === category.id
                ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/25 scale-105'
                : 'bg-slate-800/50 text-slate-300 border border-slate-600/50 hover:bg-slate-700/50 hover:text-white hover:border-slate-500/50'
            }
          `}
        >
          {/* Hover Glow Effect */}
          <div className={`
            absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300
            ${activeCategory === category.id ? '' : 'bg-gradient-to-r from-blue-500/20 to-purple-500/20'}
          `} />

          {/* Content */}
          <div className="relative flex items-center gap-2">
            <span className="text-lg">{category.emoji}</span>
            <span className="hidden sm:inline text-sm font-medium">
              {category.displayName}
            </span>
            <span className="sm:hidden text-sm font-medium">
              {category.emoji}
            </span>
          </div>

          {/* Active Indicator */}
          {activeCategory === category.id && (
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full animate-pulse" />
          )}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;