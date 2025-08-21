// Movie data from the provided JSON - including poster URLs
const movieData = {
  "Heart ah warm panu vro ❤️": [
    {
      "title": "Extremely Close and Incredibly Loud",
      "year": "2011",
      "language": "English",
      "rating": 4.2,
      "review": "A deeply moving film about loss and healing. The young protagonist's journey through New York after 9/11 is both heartbreaking and hopeful. Tom Hanks delivers another stellar performance, and the cinematography beautifully captures the emotional weight of the story.",
      "genre": "Drama",
      "director": "Stephen Daldry",
      "actors": "Tom Hanks, Sandra Bullock",
      "poster": "https://m.media-amazon.com/images/M/MV5BMTUxNzYwMTE3NV5BMl5BanBnXkFtZTcwMDY2NzU4Ng@@._V1_SX300.jpg"
    },
    {
      "title": "Anbe Sivam",
      "year": "2003",
      "language": "Tamil",
      "rating": 4.8,
      "review": "A masterpiece by Kamal Haasan that perfectly blends philosophy, comedy, and human emotions. The film's message about love and humanity is timeless. Madhavan's chemistry with Kamal is exceptional, making this a must-watch classic.",
      "genre": "Drama, Comedy",
      "director": "Sundar C",
      "actors": "Kamal Haasan, Madhavan",
      "poster": "https://m.media-amazon.com/images/M/MV5BYjY2NDNhOTItNjAwMi00ZjA0LTkzOGYtNWJkZmZiN2FlODU4XkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_SX300.jpg"
    },
    {
      "title": "Thanga Meengal",
      "year": "2013",
      "language": "Tamil",
      "rating": 4.5,
      "review": "Ram's directorial debut is a touching father-daughter story. The film's authentic portrayal of a single parent's struggles and the bond with his daughter is beautifully crafted. Simple yet powerful storytelling.",
      "genre": "Drama, Family",
      "director": "Ram",
      "actors": "Ram, Baby Sadhana",
      "poster": "https://m.media-amazon.com/images/M/MV5BOTY3MWE0MjYtMDkzZi00MzgyLThiYzAtYzc5YmQwNzk4MTRlXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_SX300.jpg"
    },
    {
      "title": "Catch Me If You Can",
      "year": "2002",
      "language": "English",
      "rating": 4.3,
      "review": "Spielberg at his finest with DiCaprio delivering a charismatic performance as Frank Abagnale. The cat-and-mouse game between DiCaprio and Hanks is thrilling, and the period details are meticulously crafted.",
      "genre": "Biography, Crime, Drama",
      "director": "Steven Spielberg",
      "actors": "Leonardo DiCaprio, Tom Hanks",
      "poster": "https://m.media-amazon.com/images/M/MV5BMTY5MzYzNjc5NV5BMl5BanBnXkFtZTYwNTUyNTc2._V1_SX300.jpg"
    },
    {
      "title": "The Pursuit of Happyness",
      "year": "2006",
      "language": "English",
      "rating": 4.6,
      "review": "Will Smith's most emotionally powerful performance. The real-life story of struggle and perseverance is inspiring without being preachy. The father-son dynamic adds authentic emotional depth to the narrative.",
      "genre": "Biography, Drama",
      "director": "Gabriele Muccino",
      "actors": "Will Smith, Jaden Smith",
      "poster": "https://m.media-amazon.com/images/M/MV5BMTQ5NjQ0NDI3NF5BMl5BanBnXkFtZTcwNDI0MjEzMw@@._V1_SX300.jpg"
    }
  ],
  "Some times isook to cry mame 😭": [
    {
      "title": "Kattradhu Thamizh",
      "year": "2007",
      "language": "Tamil",
      "rating": 4.4,
      "review": "Ram's dark and intense portrayal of an unemployed youth is haunting. The film's critique of the education system and societal pressures is brutally honest. Jiiva's performance is raw and compelling.",
      "genre": "Drama, Thriller",
      "director": "Ram",
      "actors": "Jiiva, Anjali",
      "poster": "https://m.media-amazon.com/images/M/MV5BZmJkM2Y4ZjItOGQ5Ny00Y2E2LTk3OTgtMjhmMTYyYzgwNDc0XkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
      "title": "Capernaum",
      "year": "2018",
      "language": "Arabic",
      "rating": 4.7,
      "review": "A heartbreaking look at child poverty in Lebanon. The film's use of non-professional actors adds to its authenticity. Zain's performance as a child seeking justice is absolutely incredible.",
      "genre": "Drama",
      "director": "Nadine Labaki",
      "actors": "Zain Al Rafeea, Yordanos Shiferaw",
      "poster": "https://m.media-amazon.com/images/M/MV5BYzEyMzQ1OTktZTljZi00OWQzLWE2ZmUtZjQyNzBjYjE1NTc0XkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
      "title": "Schindler's List",
      "year": "1993",
      "language": "English",
      "rating": 4.9,
      "review": "Spielberg's masterpiece about the Holocaust is emotionally devastating yet essential viewing. The black and white cinematography with selective color creates powerful visual metaphors. Liam Neeson's portrayal of Schindler is unforgettable.",
      "genre": "Biography, Drama, History",
      "director": "Steven Spielberg",
      "actors": "Liam Neeson, Ralph Fiennes",
      "poster": "https://m.media-amazon.com/images/M/MV5BNjM1ZDQxYWUtMzQyZS00MTE1LWJmZGYtNGUyNTdlYjM3ZmVmXkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
      "title": "12 Years a Slave",
      "year": "2013",
      "language": "English",
      "rating": 4.5,
      "review": "A brutal and necessary examination of slavery in America. Chiwetel Ejiofor's performance is phenomenal, carrying the emotional weight of the entire film. McQueen's direction is unflinching and powerful.",
      "genre": "Biography, Drama, History",
      "director": "Steve McQueen",
      "actors": "Chiwetel Ejiofor, Michael Fassbender",
      "poster": "https://m.media-amazon.com/images/M/MV5BMjExMTEzODkyN15BMl5BanBnXkFtZTcwNTU4NTc4OQ@@._V1_SX300.jpg"
    }
  ],
  "*Tha Action na idhu dhan da 💥": [
    {
      "title": "Mad Max: Fury Road",
      "year": "2015",
      "language": "English",
      "rating": 4.6,
      "review": "George Miller returns with a stunning post-apocalyptic masterpiece. The practical effects and stunts are incredible. Charlize Theron's Furiosa is a badass character, and the film's feminist undertones are powerful.",
      "genre": "Action, Adventure, Sci-Fi",
      "director": "George Miller",
      "actors": "Tom Hardy, Charlize Theron",
      "poster": "https://m.media-amazon.com/images/M/MV5BZDRkODJhOTgtOTc1OC00NTgzLTk4NjItNDgxZDY4YjlmNDY2XkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
      "title": "John Wick",
      "year": "2014",
      "language": "English",
      "rating": 4.3,
      "review": "Keanu Reeves reinvents himself as the ultimate action hero. The choreographed fight sequences are like a deadly ballet. The world-building around the Continental Hotel is fascinating.",
      "genre": "Action, Crime, Thriller",
      "director": "Chad Stahelski",
      "actors": "Keanu Reeves, Michael Nyqvist",
      "poster": "https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_SX300.jpg"
    },
    {
      "title": "Die Hard",
      "year": "1988",
      "language": "English",
      "rating": 4.5,
      "review": "The blueprint for modern action films. Bruce Willis's John McClane is the perfect everyman hero. The confined setting of Nakatomi Plaza creates incredible tension throughout.",
      "genre": "Action, Thriller",
      "director": "John McTiernan",
      "actors": "Bruce Willis, Alan Rickman",
      "poster": "https://m.media-amazon.com/images/M/MV5BMGNlYmM1NmQtYWExMS00NmRjLTg5ZmEtMmYyYzJkMzljYWMxXkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
      "title": "Asuran",
      "year": "2019",
      "language": "Tamil",
      "rating": 4.4,
      "review": "Dhanush delivers a powerhouse performance in this raw and violent tale of caste oppression. The film's social commentary is hard-hitting, and the action sequences are brutal yet meaningful.",
      "genre": "Action, Drama",
      "director": "Vetrimaaran",
      "actors": "Dhanush, Manju Warrier",
      "poster": "https://m.media-amazon.com/images/M/MV5BNjFlNjk5NWMtMWMzNS00N2E5LWE2MzItMmI3MjBiY2M0MGFiXkEyXkFqcGc@._V1_SX300.jpg"
    }
  ],
  "Terror and horror are irrefutably a part of life 😱": [
    {
      "title": "The Shining",
      "year": "1980",
      "language": "English",
      "rating": 4.7,
      "review": "Kubrick's psychological horror masterpiece. Jack Nicholson's descent into madness is terrifyingly brilliant. The Overlook Hotel becomes a character itself, and the cinematography creates an atmosphere of dread.",
      "genre": "Horror, Drama",
      "director": "Stanley Kubrick",
      "actors": "Jack Nicholson, Shelley Duvall",
      "poster": "https://m.media-amazon.com/images/M/MV5BNmM5ZThhY2ItOGRjOS00NzZiLWEwYTItNDgyMjFkOTgxMmRiXkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
      "title": "Memories of Murder",
      "year": "2003",
      "language": "Korean",
      "rating": 4.6,
      "review": "Bong Joon-ho's masterful thriller about incompetent police investigating serial murders. The film's dark humor and social commentary make it a perfect blend of genres.",
      "genre": "Crime, Drama, Mystery",
      "director": "Bong Joon-ho",
      "actors": "Song Kang-ho, Kim Sang-kyung",
      "poster": "https://m.media-amazon.com/images/M/MV5BYmRjOWE5NmMtYTdkYS00ODFlLWJiMTMtYzE2NDZlZjlkZDQ0XkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
      "title": "American Psycho",
      "year": "2000",
      "language": "English",
      "rating": 4.2,
      "review": "Christian Bale's unhinged performance as Patrick Bateman is iconic. The film's satire of 1980s excess and consumer culture is sharp and disturbing.",
      "genre": "Crime, Drama, Horror",
      "director": "Mary Harron",
      "actors": "Christian Bale, Willem Dafoe",
      "poster": "https://m.media-amazon.com/images/M/MV5BNzBjM2I5ZjUtNmIzNy00OGNkLWIwZDMtOTAwYWUwMzA2YjdlXkEyXkFqcGc@._V1_SX300.jpg"
    }
  ],
  "Suspense and thrilling and WTF! movies 🤯": [
    {
      "title": "Oldboy",
      "year": "2003",
      "language": "Korean",
      "rating": 4.8,
      "review": "Park Chan-wook's revenge thriller is a mind-bending masterpiece. The single-take hallway fight scene is legendary, and the twist ending is absolutely devastating.",
      "genre": "Action, Drama, Mystery",
      "director": "Park Chan-wook",
      "actors": "Choi Min-sik, Yoo Ji-tae",
      "poster": "https://m.media-amazon.com/images/M/MV5BMTI3NTQyMzU5M15BMl5BanBnXkFtZTcwMTM2MjgyMQ@@._V1_SX300.jpg"
    },
    {
      "title": "Gone Girl",
      "year": "2014",
      "language": "English",
      "rating": 4.4,
      "review": "Fincher's dark examination of marriage and media manipulation. Rosamund Pike's performance as Amy is chillingly perfect. The narrative structure keeps you guessing throughout.",
      "genre": "Drama, Mystery, Thriller",
      "director": "David Fincher",
      "actors": "Ben Affleck, Rosamund Pike",
      "poster": "https://m.media-amazon.com/images/M/MV5BMTk0MDQ3MzAzOV5BMl5BanBnXkFtZTgwNzU1NzE3MjE@._V1_SX300.jpg"
    },
    {
      "title": "Memento",
      "year": "2000",
      "language": "English",
      "rating": 4.6,
      "review": "Nolan's reverse narrative structure perfectly mirrors the protagonist's condition. Guy Pearce's performance anchors this mind-bending thriller. Every viewing reveals new details.",
      "genre": "Mystery, Thriller",
      "director": "Christopher Nolan",
      "actors": "Guy Pearce, Carrie-Anne Moss",
      "poster": "https://m.media-amazon.com/images/M/MV5BYmQ3MjliNjAtNWFiZS00YWI1LTlmZTktMzBiNDE1NjRhZjU0XkEyXkFqcGc@._V1_SX300.jpg"
    }
  ],
  "Thoughtful mattrum vithyasama genre mixed films 🧠": [
    {
      "title": "Fight Club",
      "year": "1999",
      "language": "English",
      "rating": 4.7,
      "review": "Fincher's anarchic masterpiece about masculinity and consumer culture. Norton and Pitt have incredible chemistry, and the twist reveals are perfectly executed. A film that gets better with each viewing.",
      "genre": "Drama",
      "director": "David Fincher",
      "actors": "Brad Pitt, Edward Norton",
      "poster": "https://m.media-amazon.com/images/M/MV5BOTgyOGQ1NDItNGU3Ny00MjU3LTg2YWEtNmEyYjBiMjI1Y2M5XkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
      "title": "The Shawshank Redemption",
      "year": "1994",
      "language": "English",
      "rating": 4.9,
      "review": "A perfect film about hope, friendship, and redemption. Freeman's narration is iconic, and Robbins delivers a nuanced performance. Every element works in harmony to create cinematic perfection.",
      "genre": "Drama",
      "director": "Frank Darabont",
      "actors": "Tim Robbins, Morgan Freeman",
      "poster": "https://m.media-amazon.com/images/M/MV5BMDAyY2FhYjctNDc5OS00MDNlLThiMGUtY2UxYWVkNGY2ZjljXkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
      "title": "Parasite",
      "year": "2019",
      "language": "Korean",
      "rating": 4.8,
      "review": "Bong Joon-ho's masterful class commentary is both entertaining and profound. The film's genre shifts are seamless, and the metaphors about social inequality are brilliant.",
      "genre": "Comedy, Drama, Thriller",
      "director": "Bong Joon-ho",
      "actors": "Song Kang-ho, Lee Sun-kyun",
      "poster": "https://m.media-amazon.com/images/M/MV5BYjk1Y2U4MjQtY2ZiNS00OWQyLWI3MmYtZWUwNmRjYWRiNWNhXkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
      "title": "Interstellar",
      "year": "2014",
      "language": "English",
      "rating": 4.5,
      "review": "Nolan's space epic combines hard science with emotional storytelling. The visuals are stunning, and Hans Zimmer's score is transcendent. Matthew McConaughey's performance grounds the cosmic themes.",
      "genre": "Adventure, Drama, Sci-Fi",
      "director": "Christopher Nolan",
      "actors": "Matthew McConaughey, Anne Hathaway",
      "poster": "https://m.media-amazon.com/images/M/MV5BYzdjMDAxZGItMjI2My00ODA1LTlkNzItOWFjMDU5ZDJlYWY3XkEyXkFqcGc@._V1_SX300.jpg"
    }
  ]
};

// Global variables
let currentCategory = 'all';
let currentSearchTerm = '';
let apiKey = '';
let posterCache = {};
let allMoviesFlat = [];
let floatingParticles = [];

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
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