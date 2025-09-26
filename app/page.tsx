'use client';

import { useState, useMemo } from 'react';
import { Heart, Info, Github, Sparkles } from 'lucide-react';
import MovieCard from './components/MovieCard';
import MovieModal from './components/MovieModal';
import SearchBar from './components/SearchBar';
import CategoryFilter from './components/CategoryFilter';
import AboutSection from './components/AboutSection';
import FloatingElements from './components/FloatingElements';
import { categories, allMovies } from './data/movies';
import { Movie } from './types/movie';

export default function Home() {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter movies based on category and search
  const filteredMovies = useMemo(() => {
    let movies = activeCategory === 'all'
      ? allMovies
      : categories.find(cat => cat.id === activeCategory)?.movies || [];

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      movies = movies.filter(movie =>
        movie.title.toLowerCase().includes(query) ||
        movie.director.toLowerCase().includes(query) ||
        movie.actors.toLowerCase().includes(query) ||
        movie.genre.toLowerCase().includes(query)
      );
    }

    return movies;
  }, [activeCategory, searchQuery]);

  const handleMovieClick = (movie: Movie) => {
    setSelectedMovie(movie);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedMovie(null);
  };

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
    setSearchQuery(''); // Clear search when changing category
  };

  return (
    <div className="min-h-screen relative">
      {/* Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Animated Background Gradients */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </div>

      {/* Header */}
      <header className="relative z-10 text-center py-16 px-6">
        {/* Floating Elements */}
        <FloatingElements />

        <div className="max-w-4xl mx-auto relative z-20">
          {/* Title */}
          <h1
            className="
    responsive-title
    gradient-text
    mb-4
    animate-fade-in
    transition
    duration-500
    ease-in-out
    hover:scale-105
    hover:text-transparent
    hover:bg-clip-text
    hover:bg-gradient-to-r
    hover:from-yellow-400
    hover:via-red-500
    hover:to-purple-600
    hover:drop-shadow-lg
     hover:cursor-pointer
  "
          >
            Bali's Personal Movie List
          </h1>


          {/* Subtitle */}
          <p
            className="
    responsive-subtitle
    text-slate-300
    mb-8
    max-w-2xl
    mx-auto
    leading-relaxed
    animate-slide-up
    transition
    duration-300
    ease-in-out
    hover:scale-105
    hover:text-slate-50
    hover:drop-shadow-md
    hover:cursor-pointer
  "
          >
            💜 A curated collection of exceptional films that have touched my heart and mind.
            <span className="block mt-2 text-slate-400">
              Each movie here comes with a personal recommendation and review.
            </span>
          </p>


          {/* Stats */}
          <div className="flex justify-center items-center gap-8 mb-8 text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="font-medium">{allMovies.length} Curated Movies</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="w-4 h-4 text-pink-400" />
              <span className="font-medium">6 Mood Categories</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a
              href="https://github.com/balajianbalagan/movies-picks-of-bali"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center gap-2"
            >
              <Github className="w-4 h-4" />
              <span>View Source</span>
            </a>
            <button
              onClick={() => setIsAboutModalOpen(true)}
              className="btn-secondary flex items-center gap-2"
            >
              <Info className="w-4 h-4" />
              <span>About Bali</span>
            </button>
          </div>
        </div>
      </header>

      {/* Search Section */}
      <section className="relative z-10 px-6 mb-12">
        <SearchBar
          movies={allMovies}
          onSearch={setSearchQuery}
          searchQuery={searchQuery}
        />
      </section>

      {/* Category Filter */}
      <section className="relative z-5 px-6">
        <CategoryFilter
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={handleCategoryChange}
        />
      </section>

      {/* Search Results Info */}
      {searchQuery && (
        <div className="relative z-10 px-6 mb-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-slate-300">
              <div>
                Found <span className="text-blue-400 font-semibold">{filteredMovies.length}</span> movie{filteredMovies.length !== 1 ? 's' : ''} matching "<span className="text-purple-400">{searchQuery}</span>"
              </div>
              <button
                onClick={() => setSearchQuery('')}
                className="text-sm text-slate-400 hover:text-white transition-colors duration-200 underline"
              >
                Clear Search
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Movies Grid */}
      <main className="relative z-5 px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          {filteredMovies.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {filteredMovies.map((movie, index) => (
                <div
                  key={`${movie.title}-${movie.year}`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <MovieCard
                    movie={movie}
                    onClick={() => handleMovieClick(movie)}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="max-w-md mx-auto">
                <div className="text-6xl mb-6">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-4">No Movies Found</h3>
                <p className="text-slate-400 mb-6">
                  {searchQuery
                    ? `No movies match your search for "${searchQuery}". Try a different search term or browse by category.`
                    : "No movies found in this category."
                  }
                </p>
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="btn-primary"
                  >
                    Clear Search
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 text-center py-12 px-6 border-t border-slate-800/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-slate-400 mb-4">
            <p className="mb-2">
              ✨ Crafted with passion for cinema and technology
            </p>
            <p className="text-sm">
              Every movie in this collection has been personally watched and reviewed to ensure quality recommendations.
            </p>
          </div>

          <div className="flex justify-center items-center gap-6 text-sm text-slate-500">
            <span>Made with ❤️ by Bali</span>
            <span>•</span>
            <span>{new Date().getFullYear()}</span>
            <span>•</span>
            <span>Built with Next.js & Tailwind</span>
          </div>
        </div>
      </footer>

      {/* Movie Modal */}
      <MovieModal
        movie={selectedMovie}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />

      {/* About Modal */}
      <AboutSection
        isOpen={isAboutModalOpen}
        onClose={() => setIsAboutModalOpen(false)}
      />
    </div>
  );
}