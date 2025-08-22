// Load movie data from movies.json
let movieData = {};

async function loadMovieData() {
  try {
    const response = await fetch('movies.json');
    if (!response.ok) throw new Error('Failed to load movies.json');
    movieData = await response.json();
  } catch (err) {
    console.error('Error loading movie data:', err);
    movieData = {};
  }
}

// Global variables
let currentCategory = 'all';
let currentSearchTerm = '';
let apiKey = '';
let posterCache = {};
let allMoviesFlat = [];
let floatingParticles = [];

// Initialize the application
document.addEventListener('DOMContentLoaded', async function() {
  await loadMovieData();
  initializeMoviesData();
  showApiSetupModal();
  setupEventListeners();
  setupInteractiveElements();
  renderMovies();
  createFloatingParticles();
});

// Flatten all movies into a single array for easier handling
function initializeMoviesData() {
  allMoviesFlat = [];
  for (const [category, movies] of Object.entries(movieData)) {
    movies.forEach(movie => {
      allMoviesFlat.push({
        ...movie,
        category: category
      });
    });
  }
}

// Setup event listeners
function setupEventListeners() {
  // Category buttons
  const categoryButtons = document.querySelectorAll('.category-btn');
  categoryButtons.forEach(btn => {
    btn.addEventListener('click', function() {
      const category = this.getAttribute('data-category');
      setActiveCategory(category);
      filterMovies();
    });
  });

  // Search functionality
  const searchInput = document.getElementById('search-input');
  const clearSearchBtn = document.getElementById('clear-search');

  if (searchInput) {
    searchInput.addEventListener('input', handleSearchInput);
    searchInput.addEventListener('focus', showSearchSuggestions);
    searchInput.addEventListener('blur', () => {
      setTimeout(() => hideSearchSuggestions(), 200);
    });
  }

  if (clearSearchBtn) {
    clearSearchBtn.addEventListener('click', clearSearch);
  }

  // Close modals when clicking outside
  const apiModal = document.getElementById('api-setup-modal');
  const movieModal = document.getElementById('movie-modal');
  const aboutModal = document.getElementById('about-modal');

  if (apiModal) {
    apiModal.addEventListener('click', function(e) {
      if (e.target === this) {
        closeApiSetup();
      }
    });
  }

  if (movieModal) {
    movieModal.addEventListener('click', function(e) {
      if (e.target === this) {
        closeMovieModal();
      }
    });
  }

  if (aboutModal) {
    aboutModal.addEventListener('click', function(e) {
      if (e.target === this) {
        closeAboutModal();
      }
    });
  }

  // Keyboard shortcuts
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      closeMovieModal();
      closeAboutModal();
      closeApiSetup();
    }
    if (e.ctrlKey && e.key === 'k') {
      e.preventDefault();
      if (searchInput) searchInput.focus();
    }
  });
}

// Setup interactive elements
function setupInteractiveElements() {
  // Custom cursor tracking
  if (window.innerWidth > 768) {
    let cursorX = 0;
    let cursorY = 0;
    
    document.addEventListener('mousemove', function(e) {
      cursorX = e.clientX;
      cursorY = e.clientY;
      
      // Update custom cursor position
      document.documentElement.style.setProperty('--cursor-x', cursorX + 'px');
      document.documentElement.style.setProperty('--cursor-y', cursorY + 'px');
      
      // Update floating particles
      updateFloatingParticles(cursorX, cursorY);
    });
  }

  // Interactive title effects
  const titleWords = document.querySelectorAll('.title-word');
  titleWords.forEach((word, index) => {
    word.addEventListener('mouseenter', function() {
      this.style.animation = 'bounce 0.6s ease';
      setTimeout(() => {
        this.style.animation = `gradientShift 3s ease-in-out infinite, float3D 6s ease-in-out infinite`;
        this.style.animationDelay = index === 1 ? '-1.5s' : '0s';
      }, 600);
    });
  });

  // Parallax scrolling effect
  window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.hero-background');
    
    parallaxElements.forEach(element => {
      const speed = 0.5;
      element.style.transform = `translateY(${scrolled * speed}px)`;
    });
  });
}

// Create floating particles
function createFloatingParticles() {
  const particlesContainer = document.querySelector('.interactive-particles');
  if (!particlesContainer) return;
  
  for (let i = 0; i < 15; i++) {
    const particle = document.createElement('div');
    particle.className = 'floating-particle';
    particle.style.cssText = `
      position: absolute;
      width: 3px;
      height: 3px;
      background: ${i % 2 === 0 ? '#00FFFF' : '#FF00FF'};
      border-radius: 50%;
      box-shadow: 0 0 10px currentColor;
      pointer-events: none;
      transition: all 0.3s ease;
    `;
    
    // Random initial position
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    
    particlesContainer.appendChild(particle);
    
    floatingParticles.push({
      element: particle,
      baseX: Math.random() * window.innerWidth,
      baseY: Math.random() * window.innerHeight,
      speed: 0.02 + Math.random() * 0.02
    });
  }
}

// Update floating particles based on mouse movement
function updateFloatingParticles(mouseX, mouseY) {
  floatingParticles.forEach(particle => {
    const rect = particle.element.getBoundingClientRect();
    const particleX = rect.left + rect.width / 2;
    const particleY = rect.top + rect.height / 2;
    
    const distance = Math.sqrt((mouseX - particleX) ** 2 + (mouseY - particleY) ** 2);
    const maxDistance = 200;
    
    if (distance < maxDistance) {
      const force = (maxDistance - distance) / maxDistance;
      const angle = Math.atan2(particleY - mouseY, particleX - mouseX);
      
      const moveX = Math.cos(angle) * force * 50;
      const moveY = Math.sin(angle) * force * 50;
      
      particle.element.style.transform = `translate(${moveX}px, ${moveY}px) scale(${1 + force})`;
      particle.element.style.opacity = 1;
    } else {
      particle.element.style.transform = 'translate(0, 0) scale(1)';
      particle.element.style.opacity = 0.7;
    }
  });
}

// Search functionality
function handleSearchInput(e) {
  currentSearchTerm = e.target.value.toLowerCase().trim();
  const clearBtn = document.getElementById('clear-search');
  
  if (currentSearchTerm) {
    if (clearBtn) clearBtn.classList.remove('hidden');
    showSearchSuggestions();
  } else {
    if (clearBtn) clearBtn.classList.add('hidden');
    hideSearchSuggestions();
  }
  
  filterMovies();
  updateSearchResultsInfo();
}

function showSearchSuggestions() {
  const searchTerm = currentSearchTerm;
  const suggestionsContainer = document.getElementById('search-suggestions');
  
  if (!suggestionsContainer || !searchTerm || searchTerm.length < 2) {
    hideSearchSuggestions();
    return;
  }
  
  const suggestions = allMoviesFlat.filter(movie => 
    movie.title.toLowerCase().includes(searchTerm) ||
    movie.director.toLowerCase().includes(searchTerm) ||
    movie.actors.toLowerCase().includes(searchTerm) ||
    movie.genre.toLowerCase().includes(searchTerm)
  ).slice(0, 5);
  
  if (suggestions.length === 0) {
    hideSearchSuggestions();
    return;
  }
  
  suggestionsContainer.innerHTML = suggestions.map(movie => {
    const titleMatch = highlightMatch(movie.title, searchTerm);
    const directorMatch = movie.director.toLowerCase().includes(searchTerm) ? 
      ` • ${highlightMatch(movie.director, searchTerm)}` : '';
    
    return `
      <div class="suggestion-item" onclick="selectSuggestion('${movie.title.replace(/'/g, "\\'")}')">
        <div>
          <strong>${titleMatch}</strong> (${movie.year})
          ${directorMatch}
        </div>
        <div style="font-size: 0.85rem; color: var(--cyber-text-dim);">
          ${movie.genre}
        </div>
      </div>
    `;
  }).join('');
  
  suggestionsContainer.classList.remove('hidden');
}

function hideSearchSuggestions() {
  const suggestionsContainer = document.getElementById('search-suggestions');
  if (suggestionsContainer) {
    suggestionsContainer.classList.add('hidden');
  }
}

function selectSuggestion(title) {
  const searchInput = document.getElementById('search-input');
  const clearBtn = document.getElementById('clear-search');
  
  if (searchInput) {
    searchInput.value = title;
    currentSearchTerm = title.toLowerCase();
  }
  
  hideSearchSuggestions();
  filterMovies();
  updateSearchResultsInfo();
  
  if (clearBtn) clearBtn.classList.remove('hidden');
}

function highlightMatch(text, searchTerm) {
  if (!searchTerm) return text;
  const regex = new RegExp(`(${searchTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
  return text.replace(regex, '<span class="suggestion-match">$1</span>');
}

function clearSearch() {
  const searchInput = document.getElementById('search-input');
  const clearBtn = document.getElementById('clear-search');
  
  if (searchInput) searchInput.value = '';
  if (clearBtn) clearBtn.classList.add('hidden');
  
  currentSearchTerm = '';
  hideSearchSuggestions();
  filterMovies();
  updateSearchResultsInfo();
}

function updateSearchResultsInfo() {
  const resultsInfo = document.getElementById('search-results-info');
  const resultsText = document.getElementById('search-results-text');
  
  if (!resultsInfo || !resultsText) return;
  
  if (currentSearchTerm) {
    const visibleMovies = document.querySelectorAll('.movie-card:not([style*="display: none"])');
    const count = visibleMovies.length;
    
    resultsText.textContent = `Found ${count} movie${count !== 1 ? 's' : ''} matching "${currentSearchTerm}"`;
    resultsInfo.classList.remove('hidden');
  } else {
    resultsInfo.classList.add('hidden');
  }
}

// Show API setup modal on first visit
function showApiSetupModal() {
  const modal = document.getElementById('api-setup-modal');
  if (modal) modal.classList.remove('hidden');
}

// Modal functions - make them globally accessible
window.openApiSetup = function() {
  const modal = document.getElementById('api-setup-modal');
  const input = document.getElementById('api-key-input');
  
  if (modal) modal.classList.remove('hidden');
  if (input) input.value = apiKey;
}

window.closeApiSetup = function() {
  const modal = document.getElementById('api-setup-modal');
  if (modal) modal.classList.add('hidden');
}

window.saveApiKey = function() {
  const input = document.getElementById('api-key-input');
  if (input) {
    apiKey = input.value.trim();
  }
  closeApiSetup();
  
  if (apiKey) {
    renderMovies();
  }
}

window.openAboutModal = function() {
  const modal = document.getElementById('about-modal');
  if (modal) modal.classList.remove('hidden');
}

window.closeAboutModal = function() {
  const modal = document.getElementById('about-modal');
  if (modal) modal.classList.add('hidden');
}

window.clearSearch = clearSearch;

// Set active category
function setActiveCategory(category) {
  const buttons = document.querySelectorAll('.category-btn');
  buttons.forEach(btn => {
    btn.classList.remove('active');
    if (btn.getAttribute('data-category') === category) {
      btn.classList.add('active');
    }
  });
  currentCategory = category;
}

// Enhanced filter movies function
function filterMovies() {
  const moviesGrid = document.getElementById('movies-grid');
  const noResults = document.getElementById('no-results');
  
  if (!moviesGrid) return;
  
  const movieCards = moviesGrid.querySelectorAll('.movie-card');
  let visibleCount = 0;
  
  movieCards.forEach(card => {
    const cardCategory = card.getAttribute('data-category');
    const movieTitle = card.querySelector('.movie-title');
    
    if (!movieTitle) return;
    
    const originalTitle = movieTitle.getAttribute('data-original-title') || movieTitle.textContent;
    
    // Store original title if not already stored
    if (!movieTitle.getAttribute('data-original-title')) {
      movieTitle.setAttribute('data-original-title', originalTitle);
    }
    
    // Check category filter
    const categoryMatch = currentCategory === 'all' || cardCategory === currentCategory;
    
    // Check search filter
    const searchableText = [
      originalTitle,
      card.getAttribute('data-director') || '',
      card.getAttribute('data-actors') || '',
      card.getAttribute('data-genre') || ''
    ].join(' ').toLowerCase();
    
    const searchMatch = !currentSearchTerm || searchableText.includes(currentSearchTerm);
    
    if (categoryMatch && searchMatch) {
      card.style.display = 'block';
      visibleCount++;
      
      // Highlight search term in title
      if (currentSearchTerm && originalTitle.toLowerCase().includes(currentSearchTerm)) {
        const highlightedTitle = highlightMatch(originalTitle, currentSearchTerm);
        movieTitle.innerHTML = highlightedTitle;
      } else {
        movieTitle.innerHTML = originalTitle;
      }
      
      // Re-animate
      card.style.animation = 'none';
      card.offsetHeight; // Trigger reflow
      card.style.animation = 'fadeInUp 0.5s ease forwards';
    } else {
      card.style.display = 'none';
    }
  });
  
  // Show/hide no results message
  if (noResults) {
    if (visibleCount === 0) {
      noResults.classList.remove('hidden');
    } else {
      noResults.classList.add('hidden');
    }
  }
}

// Generate star rating
function generateStars(rating) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
  
  let starsHTML = '';
  
  for (let i = 0; i < fullStars; i++) {
    starsHTML += '<span class="star">★</span>';
  }
  
  if (hasHalfStar) {
    starsHTML += '<span class="star">★</span>';
  }
  
  for (let i = 0; i < emptyStars; i++) {
    starsHTML += '<span class="star" style="opacity: 0.3;">★</span>';
  }
  
  return starsHTML;
}

// Fetch movie poster from OMDb API
async function fetchMoviePoster(title, year) {
  if (!apiKey) {
    return null;
  }
  
  const cacheKey = `${title}_${year}`;
  if (posterCache[cacheKey]) {
    return posterCache[cacheKey];
  }
  
  try {
    const response = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&t=${encodeURIComponent(title)}&y=${year}`);
    const data = await response.json();
    
    if (data.Response === 'True' && data.Poster && data.Poster !== 'N/A') {
      posterCache[cacheKey] = data.Poster;
      return data.Poster;
    }
  } catch (error) {
    console.log('Error fetching poster:', error);
  }
  
  return null;
}

// Create movie card HTML
async function createMovieCard(movie, category) {
  // Use provided poster URL from JSON data first, then fallback to API
  const posterUrl = movie.poster || await fetchMoviePoster(movie.title, movie.year);
  
  const posterHTML = posterUrl 
    ? `<img src="${posterUrl}" alt="${movie.title} Poster" onerror="this.style.display='none'; this.parentNode.innerHTML='🎬';">`
    : '🎬';
  
  const movieId = `${movie.title.replace(/[^a-zA-Z0-9]/g, '_')}_${movie.year}`;
  
  const cardElement = document.createElement('div');
  cardElement.className = 'movie-card';
  cardElement.setAttribute('data-category', category);
  cardElement.setAttribute('data-movie-id', movieId);
  cardElement.setAttribute('data-director', movie.director);
  cardElement.setAttribute('data-actors', movie.actors);
  cardElement.setAttribute('data-genre', movie.genre);
  
  cardElement.innerHTML = `
    <div class="movie-poster">
      ${posterHTML}
    </div>
    <div class="movie-info">
      <h3 class="movie-title">${movie.title}</h3>
      <div class="movie-meta">
        <span>${movie.year}</span>
        <span>${movie.language}</span>
      </div>
      <div class="movie-rating">
        <div class="stars">
          ${generateStars(movie.rating)}
        </div>
        <span class="rating-number">${movie.rating}</span>
      </div>
      <div class="movie-genre">${movie.genre}</div>
    </div>
  `;
  
  cardElement.addEventListener('click', function() {
    openMovieModal(movie.title, category);
  });
  
  return cardElement;
}

// Render all movies
async function renderMovies() {
  const moviesGrid = document.getElementById('movies-grid');
  if (!moviesGrid) return;
  
  moviesGrid.innerHTML = '';
  
  for (const [category, movies] of Object.entries(movieData)) {
    for (const movie of movies) {
      const movieCard = await createMovieCard(movie, category);
      moviesGrid.appendChild(movieCard);
    }
  }
  
  filterMovies();
}

// Find movie by title and category
function findMovie(title, category) {
  if (category === 'all') {
    for (const [cat, movies] of Object.entries(movieData)) {
      const movie = movies.find(m => m.title === title);
      if (movie) return movie;
    }
  } else {
    return movieData[category]?.find(m => m.title === title);
  }
  return null;
}

// Open movie detail modal
window.openMovieModal = async function(title, category) {
  const movie = findMovie(title, category);
  if (!movie) return;
  
  const modal = document.getElementById('movie-modal');
  if (!modal) return;
  
  // Use provided poster URL first, then fallback to API
  const posterUrl = movie.poster || await fetchMoviePoster(movie.title, movie.year);
  
  const modalTitle = document.getElementById('modal-title');
  const modalYear = document.getElementById('modal-year');
  const modalLanguage = document.getElementById('modal-language');
  const modalGenre = document.getElementById('modal-genre');
  const modalDirector = document.getElementById('modal-director');
  const modalActors = document.getElementById('modal-actors');
  const modalReview = document.getElementById('modal-review');
  const modalRating = document.getElementById('modal-rating');
  const modalPoster = document.getElementById('modal-poster');
  
  if (modalTitle) modalTitle.textContent = movie.title;
  if (modalYear) modalYear.textContent = movie.year;
  if (modalLanguage) modalLanguage.textContent = movie.language;
  if (modalGenre) modalGenre.textContent = movie.genre;
  if (modalDirector) modalDirector.textContent = movie.director;
  if (modalActors) modalActors.textContent = movie.actors;
  if (modalReview) modalReview.textContent = movie.review;
  
  if (modalRating) {
    modalRating.innerHTML = `
      <div class="stars">${generateStars(movie.rating)}</div>
      <span class="rating-number">${movie.rating}</span>
    `;
  }
  
  if (modalPoster) {
    if (posterUrl) {
      modalPoster.src = posterUrl;
      modalPoster.style.display = 'block';
      modalPoster.onerror = function() {
        this.style.display = 'none';
      };
    } else {
      modalPoster.style.display = 'none';
    }
  }
  
  modal.classList.remove('hidden');
}

// Close movie detail modal
window.closeMovieModal = function() {
  const modal = document.getElementById('movie-modal');
  if (modal) modal.classList.add('hidden');
}

// Add CSS animation keyframes if not already added
if (!document.getElementById('custom-animations')) {
  const style = document.createElement('style');
  style.id = 'custom-animations';
  style.textContent = `
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    @keyframes bounce {
      0%, 20%, 50%, 80%, 100% {
        transform: translateY(0);
      }
      40% {
        transform: translateY(-10px);
      }
      60% {
        transform: translateY(-5px);
      }
    }

    @media (min-width: 769px) {
      body::before {
        left: var(--cursor-x, 0);
        top: var(--cursor-y, 0);
      }
    }
  `;
  document.head.appendChild(style);
}