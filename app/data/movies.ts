import { MovieData, MovieCategory } from '../types/movie';

// Movie data structure from the original JSON
export const movieData: MovieData = {
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
    },
    {
      "title": "The Terminal",
      "year": "2004",
      "language": "English",
      "rating": 4.2,
      "review": "A heartwarming comedy-drama that showcases Tom Hanks's incredible talent. The film explores themes of home, identity, and bureaucracy with humor and charm.",
      "genre": "Comedy, Drama",
      "director": "Steven Spielberg",
      "actors": "Tom Hanks, Catherine Zeta-Jones",
      "poster": "https://m.media-amazon.com/images/M/MV5BMTUzMTU2NTkyOV5BMl5BanBnXkFtZTcwNDQ1OTU1NA@@._V1_SX300.jpg"
    },
    {
      "title": "Ford v Ferrari",
      "year": "2019",
      "language": "English",
      "rating": 4.5,
      "review": "A thrilling and well-acted racing film that's about more than just cars. The story of two brilliant minds taking on the corporate establishment is both inspiring and exhilarating.",
      "genre": "Action, Biography, Drama",
      "director": "James Mangold",
      "actors": "Matt Damon, Christian Bale",
      "poster": "https://m.media-amazon.com/images/M/MV5BMGY2M2QyMDgtYjUxZi00NjgyLWFlNTktNmI0YmU4YWE1YzljXkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
      "title": "Captain Fantastic",
      "year": "2014",
      "language": "English",
      "rating": 4.5,
      "review": "A film about a father raising his children off the grid. Viggo Mortensen delivers a career-best performance, and the film's exploration of alternative lifestyles and societal norms is both challenging and inspiring.",
      "genre": "Comedy, Drama",
      "director": "Matt Ross",
      "actors": "Viggo Mortensen, Frank Langella, Kathryn Hahn",
      "poster": "https://upload.wikimedia.org/wikipedia/en/c/c2/Captain_Fantastic_poster.jpg"
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
      "title": "Schindler's List",
      "year": "1993",
      "language": "English",
      "rating": 4.9,
      "review": "Spielberg's masterpiece about the Holocaust is emotionally devastating yet essential viewing. The black and white cinematography with selective color creates powerful visual metaphors. Liam Neeson's portrayal of Schindler is unforgettable.",
      "genre": "Biography, Drama, History",
      "director": "Steven Spielberg",
      "actors": "Liam Neeson, Ralph Fiennes",
      "poster": "https://m.media-amazon.com/images/M/MV5BNjM1ZDQxZjItMzQyZS00MTE1LWJmZGYtNGUyNTdlYjM3ZmVmXkEyXkFqcGc@._V1_SX300.jpg"
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
      "title": "The Godfather Trilogy",
      "year": "1972-1990",
      "language": "English",
      "rating": 4.9,
      "review": "A cinematic masterpiece. The definitive mob saga that explores family, power, and the corruption of the American dream. Coppola's direction and the iconic performances make this a must-watch for any film lover.",
      "genre": "Crime, Drama",
      "director": "Francis Ford Coppola",
      "actors": "Marlon Brando, Al Pacino, Robert De Niro",
      "poster": "https://m.media-amazon.com/images/M/MV5BNjliZmIwZTMtOWVlNS00ZmU0LWE0MTctNmViMzM0NjEzYzcxXkEyXkFqcGc@._V1_SX300.jpg"
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
      "title": "Anatomy of a Fall",
      "year": "2023",
      "language": "French",
      "rating": 4.3,
      "review": "Was Samuel Maleski's death an accident or murder? This intense courtroom drama keeps you uncertain until the final moments. Outstanding performances and a narrative that delves into social dynamics and the psychology of ambition make it a compelling watch.",
      "genre": "Crime, Thriller, Drama",
      "director": "Justine Triet",
      "actors": "Sandra Hüller, Swann Arlaud, Milo Machado-Graner",
      "poster": "https://upload.wikimedia.org/wikipedia/en/8/88/Anatomy_of_a_Fall_%282023%29_film_poster.jpg"
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
      "title": "Super Deluxe",
      "year": "2019",
      "language": "Tamil",
      "rating": 4.5,
      "review": "A genre-defying masterpiece with four interconnected stories. The film is a surreal and philosophical black comedy that explores morality, destiny, and human nature. Vijay Sethupathi's performance is transcendent.",
      "genre": "Black Comedy, Drama, Thriller",
      "director": "Thiagarajan Kumararaja",
      "actors": "Vijay Sethupathi, Fahadh Faasil, Samantha Ruth Prabhu",
      "poster": "https://m.media-amazon.com/images/M/MV5BMTg0NjY2NzM4NV5BMl5BanBnXkFtZTcwNDQ1OTU1NA@@._V1_SX300.jpg"
    }
  ]
};

// Category mapping with clean display names
export const categories: MovieCategory[] = [
  {
    id: "all",
    name: "all",
    displayName: "All Movies",
    emoji: "🎬",
    movies: []
  },
  {
    id: "heartwarming",
    name: "Heart ah warm panu vro ❤️",
    displayName: "Heartwarming",
    emoji: "❤️",
    movies: movieData["Heart ah warm panu vro ❤️"]
  },
  {
    id: "emotional",
    name: "Some times isook to cry mame 😭",
    displayName: "Emotional",
    emoji: "😭",
    movies: movieData["Some times isook to cry mame 😭"]
  },
  {
    id: "action",
    name: "*Tha Action na idhu dhan da 💥",
    displayName: "Action",
    emoji: "💥",
    movies: movieData["*Tha Action na idhu dhan da 💥"]
  },
  {
    id: "horror",
    name: "Terror and horror are irrefutably a part of life 😱",
    displayName: "Horror",
    emoji: "😱",
    movies: movieData["Terror and horror are irrefutably a part of life 😱"]
  },
  {
    id: "thriller",
    name: "Suspense and thrilling and WTF! movies 🤯",
    displayName: "Thriller",
    emoji: "🤯",
    movies: movieData["Suspense and thrilling and WTF! movies 🤯"]
  },
  {
    id: "thoughtful",
    name: "Thoughtful mattrum vithyasama genre mixed films 🧠",
    displayName: "Thoughtful",
    emoji: "🧠",
    movies: movieData["Thoughtful mattrum vithyasama genre mixed films 🧠"]
  }
];

// Flatten all movies for search functionality
export const allMovies = Object.values(movieData).flat();