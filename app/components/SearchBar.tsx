'use client';

import { useState, useEffect, useRef } from 'react';
import { Search, X } from 'lucide-react';
import { Movie } from '../types/movie';

interface SearchBarProps {
  movies: Movie[];
  onSearch: (query: string) => void;
  searchQuery: string;
}

const SearchBar = ({ movies, onSearch, searchQuery }: SearchBarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [suggestions, setSuggestions] = useState<Movie[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const suggestionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (searchQuery.trim().length < 2) {
      setSuggestions([]);
      setIsOpen(false);
      return;
    }

    const filteredSuggestions = movies
      .filter((movie) =>
        movie.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        movie.director.toLowerCase().includes(searchQuery.toLowerCase()) ||
        movie.actors.toLowerCase().includes(searchQuery.toLowerCase()) ||
        movie.genre.toLowerCase().includes(searchQuery.toLowerCase())
      )
      .slice(0, 5);

    setSuggestions(filteredSuggestions);
    setIsOpen(filteredSuggestions.length > 0);
  }, [searchQuery, movies]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  };

  const handleSuggestionClick = (movie: Movie) => {
    onSearch(movie.title);
    setIsOpen(false);
  };

  const clearSearch = () => {
    onSearch('');
    setIsOpen(false);
    inputRef.current?.focus();
  };

  const highlightMatch = (text: string, query: string) => {
    if (!query) return text;

    const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    const parts = text.split(regex);

    return parts.map((part, index) =>
      regex.test(part) ? (
        <span key={index} className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-bold">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        suggestionsRef.current &&
        !suggestionsRef.current.contains(event.target as Node) &&
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative max-w-2xl mx-auto">
      {/* Search Input */}
      <div className="relative">
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10">
          <Search className="w-5 h-5 text-slate-400" />
        </div>

        <input
          ref={inputRef}
          type="text"
          value={searchQuery}
          onChange={handleInputChange}
          placeholder="Search movies by title, director, or genre..."
          className="w-full pl-12 pr-12 py-4 bg-slate-800/50 border border-slate-600/50 rounded-2xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300 backdrop-blur-sm"
        />

        {searchQuery && (
          <button
            onClick={clearSearch}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 p-1 rounded-full hover:bg-slate-700 transition-colors duration-200"
          >
            <X className="w-5 h-5 text-slate-400 hover:text-white" />
          </button>
        )}
      </div>

      {/* Search Suggestions */}
      {isOpen && suggestions.length > 0 && (
        <div
          ref={suggestionsRef}
          className="absolute top-full left-0 right-0 mt-2 glass-card border border-slate-600/30 rounded-xl overflow-hidden z-[60] max-h-80 overflow-y-auto"
        >
          {suggestions.map((movie, index) => (
            <div
              key={`${movie.title}-${movie.year}`}
              onClick={() => handleSuggestionClick(movie)}
              className="p-4 hover:bg-slate-700/50 cursor-pointer transition-colors duration-200 border-b border-slate-700/30 last:border-b-0"
            >
              <div className="flex items-start gap-3">
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-white mb-1">
                    {highlightMatch(movie.title, searchQuery)}
                    <span className="text-slate-400 text-sm ml-2">({movie.year})</span>
                  </div>

                  <div className="text-sm text-slate-400 mb-1">
                    <span className="font-medium">Director:</span>{' '}
                    {highlightMatch(movie.director, searchQuery)}
                  </div>

                  <div className="text-sm text-blue-400 font-medium">
                    {movie.genre}
                  </div>
                </div>

                <div className="text-right flex-shrink-0">
                  <div className="flex items-center gap-1 text-yellow-400">
                    <span className="text-sm">★</span>
                    <span className="text-sm font-semibold">{movie.rating}</span>
                  </div>
                  <div className="text-xs text-slate-400 mt-1">
                    {movie.language}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;