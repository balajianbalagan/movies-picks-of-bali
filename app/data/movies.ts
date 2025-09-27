import { MovieData, MovieCategory } from '../types/movie';

// Movie data structure from the original JSON
export const movieData: MovieData = {
  "Heart ah warm panu vro ❤️": [
    {
      "title": "Extremely Close and Incredibly Loud",
      "year": "2011",
      "language": "English",
      "rating": 3.8,
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
      "review": "A masterpiece by Kamal Haasan that perfectly blends philosophy, comedy, and human emotions. The film's message about love and humanity is timeless. Madhavan's chemistry with Kamal is exceptional, making this a must-watch classic. Movies with two contrasting characters that travel together always work well, and this is no exception.",
      "genre": "Drama, Comedy",
      "director": "Sundar C",
      "actors": "Kamal Haasan, Madhavan",
      "poster": "https://m.media-amazon.com/images/M/MV5BYjY2NDNhOTItNjAwMi00ZjA0LTkzOGYtNWJkZmZiN2FlODU4XkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_SX300.jpg"
    },
    {
      "title": "Thanga Meengal",
      "year": "2013",
      "language": "Tamil",
      "rating": 4.8,
      "review": "Ram's acting debut is a touching father-daughter story. The film's authentic portrayal of a single parent's struggles and the bond with his daughter is beautifully crafted. Simple yet powerful storytelling. The real heroes of the film are the women, especially Sadhana and Shelly Kishore, who delivers a natural and heartfelt performance.",
      "genre": "Drama, Family",
      "director": "Ram",
      "actors": "Ram, Baby Sadhana",
      "poster": "https://upload.wikimedia.org/wikipedia/en/8/8a/Thanga_Meenkal.jpg"
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
      "rating": 4.8,
      "review": "A heartwarming comedy-drama that showcases Tom Hanks's incredible talent. The film explores themes of home, identity, and bureaucracy with humor and charm.",
      "genre": "Comedy, Drama",
      "director": "Steven Spielberg",
      "actors": "Tom Hanks, Catherine Zeta-Jones",
      "poster": "https://upload.wikimedia.org/wikipedia/en/8/86/Movie_poster_the_terminal.jpg"
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
      "poster": "https://upload.wikimedia.org/wikipedia/en/a/a4/Ford_v._Ferrari_%282019_film_poster%29.png"
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
    },
    {
      "title": "Thenali",
      "year": "2000",
      "language": "Tamil",
      "rating": 4.2,
      "review": "A hilarious comedy featuring Kamal Haasan as a man with multiple phobias seeking psychiatric help. The film's humor is intelligent and the performances are excellent.",
      "genre": "Comedy",
      "director": "K. S. Ravikumar",
      "actors": "Kamal Haasan, Jayaram, Jyothika",
      "poster": "https://m.media-amazon.com/images/M/MV5BZDRkNzY3OTgtMjE2OS00OTk1LWE0MDctNjgyODJhNzM4YjJhXkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
      "title": "Avvai Shanmughi",
      "year": "1996",
      "language": "Tamil",
      "rating": 4.1,
      "review": "Kamal Haasan's brilliant performance as a man disguised as an elderly woman to be with his daughter. A heartwarming comedy with excellent emotional depth.",
      "genre": "Comedy, Family",
      "director": "K. S. Ravikumar",
      "actors": "Kamal Haasan, Meena, Gemini Ganesan",
      "poster": "https://upload.wikimedia.org/wikipedia/en/d/d5/Avvai_Shanmugi.jpg"
    },
    {
      "title": "Vasool Raja MBBS",
      "year": "2004",
      "language": "Tamil",
      "rating": 4.0,
      "review": "Kamal Haasan's entertaining remake of Munna Bhai MBBS with his own unique touch. A perfect blend of comedy and emotion.",
      "genre": "Comedy, Drama",
      "director": "Saran",
      "actors": "Kamal Haasan, Sneha, Prakash Raj",
      "poster": "https://upload.wikimedia.org/wikipedia/en/6/64/Vasool_Raja_MBBS_Poster.jpg"
    },
    {
      "title": "A Beautiful Mind",
      "year": "2001",
      "language": "English",
      "rating": 4.4,
      "review": "Russell Crowe's powerful portrayal of mathematician John Nash's struggle with schizophrenia. A moving story about genius, love, and mental health.",
      "genre": "Biography, Drama",
      "director": "Ron Howard",
      "actors": "Russell Crowe, Jennifer Connelly",
      "poster": "https://m.media-amazon.com/images/M/MV5BMzcwYWFkYzktZjAzNC00OGY1LWI4YTgtNzc5MzVjMDVmNjY0XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
    },
    {
      "title": "The Green Mile",
      "year": "1999",
      "language": "English",
      "rating": 4.6,
      "review": "Stephen King adaptation about a gentle giant wrongly convicted of murder. Tom Hanks and Michael Clarke Duncan deliver phenomenal performances in this emotionally powerful film.",
      "genre": "Crime, Drama, Fantasy",
      "director": "Frank Darabont",
      "actors": "Tom Hanks, Michael Clarke Duncan",
      "poster": "https://m.media-amazon.com/images/M/MV5BMTUxMzQyNjA5MF5BMl5BanBnXkFtZTYwOTU2NTY3._V1_SX300.jpg"
    },
    {
      "title": "The Fault in Our Stars",
      "year": "2014",
      "language": "English",
      "rating": 4.1,
      "review": "A touching romance between two teenagers with cancer. Despite dealing with heavy themes, the film finds beauty and hope in love and human connection.",
      "genre": "Drama, Romance",
      "director": "Josh Boone",
      "actors": "Shailene Woodley, Ansel Elgort",
      "poster": "https://upload.wikimedia.org/wikipedia/en/4/41/The_Fault_in_Our_Stars_%28Official_Film_Poster%29.png"
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
      "poster": "https://upload.wikimedia.org/wikipedia/en/3/38/Schindler%27s_List_movie.jpg"
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
    },
    {
      "title": "Mahanadhi",
      "year": "1994",
      "language": "Tamil",
      "rating": 4.7,
      "review": "Kamal Haasan's emotionally devastating portrayal of a man's downfall and struggle to save his daughter. One of Tamil cinema's most powerful performances dealing with human trafficking and corruption.",
      "genre": "Drama, Crime",
      "director": "Santhana Bharathi",
      "actors": "Kamal Haasan, Sukanya, Shobana",
      "poster": "https://upload.wikimedia.org/wikipedia/en/8/86/Mahanadhi_1994_poster.jpg"
    },
    {
      "title": "Moondram Pirai",
      "year": "1982",
      "language": "Tamil",
      "rating": 4.8,
      "review": "A beautiful and tragic love story between a teacher and a woman suffering from retrograde amnesia. Kamal Haasan and Sridevi deliver career-defining performances in this Balu Mahendra masterpiece.",
      "genre": "Drama, Romance",
      "director": "Balu Mahendra",
      "actors": "Kamal Haasan, Sridevi",
      "poster": "https://upload.wikimedia.org/wikipedia/en/4/41/Moondram_Pirai_poster.jpg"
    },
    {
      "title": "Capernaum",
      "year": "2018",
      "language": "Arabic",
      "rating": 4.6,
      "review": "A heartbreaking story of a young boy suing his parents for giving him life. The film's raw portrayal of poverty and child neglect is both devastating and essential viewing.",
      "genre": "Drama",
      "director": "Nadine Labaki",
      "actors": "Zain Al Rafeea, Yordanos Shiferaw",
      "poster": "https://upload.wikimedia.org/wikipedia/en/1/13/Capernaum_%28film%29.jpg"
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
      "poster": "https://upload.wikimedia.org/wikipedia/en/1/1c/Godfather_ver1.jpg"
    },
    {
      "title": "City of God",
      "year": "2002",
      "language": "Portuguese",
      "rating": 4.7,
      "review": "A brutal and beautiful portrayal of life in the favelas of Rio de Janeiro. The film's raw energy and stunning cinematography make it an unforgettable experience about crime and survival.",
      "genre": "Crime, Drama",
      "director": "Fernando Meirelles",
      "actors": "Alexandre Rodrigues, Leandro Firmino",
      "poster": "https://upload.wikimedia.org/wikipedia/en/1/10/CidadedeDeus.jpg"
    },
    {
      "title": "Goodfellas",
      "year": "1990",
      "language": "English",
      "rating": 4.6,
      "review": "Scorsese's masterpiece about the rise and fall of a mobster. Ray Liotta, Robert De Niro, and Joe Pesci deliver iconic performances in this fast-paced crime epic.",
      "genre": "Biography, Crime, Drama",
      "director": "Martin Scorsese",
      "actors": "Robert De Niro, Ray Liotta, Joe Pesci",
      "poster": "https://m.media-amazon.com/images/M/MV5BY2NkZjEzMDgtN2RjYy00YzM1LWI4ZmQtMjIwYjFjNmI3ZGEwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
    },
    {
      "title": "Django Unchained",
      "year": "2012",
      "language": "English",
      "rating": 4.5,
      "review": "Tarantino's stylish revenge western featuring Jamie Foxx as a freed slave turned bounty hunter. The film's blend of violence, humor, and social commentary is masterfully executed.",
      "genre": "Drama, Western",
      "director": "Quentin Tarantino",
      "actors": "Jamie Foxx, Christoph Waltz, Leonardo DiCaprio",
      "poster": "https://m.media-amazon.com/images/M/MV5BMjIyNTQ5NjQ1OV5BMl5BanBnXkFtZTcwODg1MDU4OA@@._V1_SX300.jpg"
    },
    {
      "title": "Gangs of Wasseypur",
      "year": "2012",
      "language": "Hindi",
      "rating": 4.6,
      "review": "Anurag Kashyap's epic crime saga spanning generations of a family feud in coal mining areas. A gritty and authentic portrayal of violence and revenge in rural India.",
      "genre": "Action, Crime, Drama",
      "director": "Anurag Kashyap",
      "actors": "Manoj Bajpayee, Richa Chadda, Nawazuddin Siddiqui",
      "poster": "https://upload.wikimedia.org/wikipedia/en/5/58/Gangs_of_wasseypur_II.jpg"
    },
    {
      "title": "Kill Bill Vol. 1 & 2",
      "year": "2003",
      "language": "English",
      "rating": 4.4,
      "review": "Tarantino's stylized revenge saga featuring Uma Thurman as The Bride. The films combine martial arts, samurai cinema, and spaghetti westerns into a unique cinematic experience.",
      "genre": "Action, Crime, Thriller",
      "director": "Quentin Tarantino",
      "actors": "Uma Thurman, David Carradine, Lucy Liu",
      "poster": "https://upload.wikimedia.org/wikipedia/en/c/c4/Kill_Bill_Volume_2.png"
    },
    {
      "title": "Casino",
      "year": "1995",
      "language": "English",
      "rating": 4.5,
      "review": "Scorsese's epic about Las Vegas casinos in the 1970s. De Niro and Pesci reunite for another powerful crime drama exploring greed, power, and betrayal.",
      "genre": "Crime, Drama",
      "director": "Martin Scorsese",
      "actors": "Robert De Niro, Sharon Stone, Joe Pesci",
      "poster": "https://upload.wikimedia.org/wikipedia/en/c/cb/Casino_%28Martins_Scorsese_film%29.png"
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
      "title": "Black Swan",
      "year": "2010",
      "language": "English",
      "rating": 4.5,
      "review": "Darren Aronofsky's psychological thriller about a ballet dancer's descent into madness. Natalie Portman's Oscar-winning performance is both beautiful and terrifying.",
      "genre": "Drama, Thriller",
      "director": "Darren Aronofsky",
      "actors": "Natalie Portman, Mila Kunis, Vincent Cassel",
      "poster": "https://m.media-amazon.com/images/M/MV5BNzY2NzI4OTE5MF5BMl5BanBnXkFtZTcwMjMyNDY4Mw@@._V1_SX300.jpg"
    },
    {
      "title": "American Psycho",
      "year": "2000",
      "language": "English",
      "rating": 4.2,
      "review": "A satirical horror about 1980s yuppie culture and toxic masculinity. Christian Bale's chilling performance as Patrick Bateman is both disturbing and darkly humorous.",
      "genre": "Crime, Drama, Horror",
      "director": "Mary Harron",
      "actors": "Christian Bale, Willem Dafoe, Jared Leto",
      "poster": "https://upload.wikimedia.org/wikipedia/en/0/0c/American_Psycho.png"
    },
    {
      "title": "IT",
      "year": "2017",
      "language": "English",
      "rating": 4.1,
      "review": "A successful adaptation of Stephen King's novel about children facing their fears. Bill Skarsgård's Pennywise is genuinely terrifying, and the coming-of-age elements add emotional depth.",
      "genre": "Horror, Thriller",
      "director": "Andy Muschietti",
      "actors": "Bill Skarsgård, Jaeden Martell, Finn Wolfhard",
      "poster": "https://upload.wikimedia.org/wikipedia/en/5/5a/It_%282017%29_poster.jpg"
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
    },
    {
      "title": "Minority Report",
      "year": "2002",
      "language": "English",
      "rating": 4.3,
      "review": "Spielberg's sci-fi thriller about pre-crime technology raises thought-provoking questions about free will and determinism. Tom Cruise delivers a solid performance in this visually stunning film.",
      "genre": "Action, Crime, Mystery",
      "director": "Steven Spielberg",
      "actors": "Tom Cruise, Colin Farrell, Samantha Morton",
      "poster": "https://upload.wikimedia.org/wikipedia/en/4/44/Minority_Report_Poster.jpg"
    },
    {
      "title": "Se7en",
      "year": "1995",
      "language": "English",
      "rating": 4.6,
      "review": "Fincher's dark masterpiece about two detectives hunting a serial killer using the seven deadly sins. Brad Pitt and Morgan Freeman's chemistry combined with the film's gritty atmosphere creates an unforgettable thriller.",
      "genre": "Crime, Drama, Mystery",
      "director": "David Fincher",
      "actors": "Brad Pitt, Morgan Freeman, Kevin Spacey",
      "poster": "https://m.media-amazon.com/images/M/MV5BOTUwODM5MTctZjczMi00OTk4LTg3NWUtNmVhMTAzNTNjYjcyXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
    },
    {
      "title": "No Country for Old Men",
      "year": "2007",
      "language": "English",
      "rating": 4.7,
      "review": "The Coen Brothers' masterful neo-western thriller. Javier Bardem's Anton Chigurh is one of cinema's most terrifying villains. A meditation on fate, violence, and the changing world.",
      "genre": "Crime, Drama, Thriller",
      "director": "Ethan Coen, Joel Coen",
      "actors": "Tommy Lee Jones, Javier Bardem, Josh Brolin",
      "poster": "https://m.media-amazon.com/images/M/MV5BMjA5Njk3MjM4OV5BMl5BanBnXkFtZTcwMTc5MTE1MQ@@._V1_SX300.jpg"
    },
    {
      "title": "Shutter Island",
      "year": "2010",
      "language": "English",
      "rating": 4.4,
      "review": "Scorsese's psychological thriller about a federal marshal investigating a disappearance at a psychiatric facility. Leonardo DiCaprio's paranoid performance keeps you questioning reality until the shocking revelation.",
      "genre": "Mystery, Thriller",
      "director": "Martin Scorsese",
      "actors": "Leonardo DiCaprio, Mark Ruffalo, Ben Kingsley",
      "poster": "https://upload.wikimedia.org/wikipedia/en/7/76/Shutterislandposter.jpg"
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
      "poster": "https://upload.wikimedia.org/wikipedia/en/a/a1/Super_Deluxe_film_poster.jpg"
    },
    {
      "title": "Taxi Driver",
      "year": "1976",
      "language": "English",
      "rating": 4.7,
      "review": "Scorsese's masterpiece about urban alienation and descent into madness. De Niro's Travis Bickle is one of cinema's most complex anti-heroes. A disturbing yet essential examination of American society.",
      "genre": "Crime, Drama",
      "director": "Martin Scorsese",
      "actors": "Robert De Niro, Jodie Foster, Cybill Shepherd",
      "poster": "https://upload.wikimedia.org/wikipedia/en/3/33/Taxi_Driver_%281976_film_poster%29.jpg"
    },
    {
      "title": "Everything Everywhere All at Once",
      "year": "2022",
      "language": "English",
      "rating": 4.6,
      "review": "A mind-bending multiverse adventure that's simultaneously absurd and deeply emotional. Michelle Yeoh delivers a career-best performance in this genre-defying exploration of family, identity, and possibility.",
      "genre": "Action, Comedy, Drama",
      "director": "Daniels",
      "actors": "Michelle Yeoh, Stephanie Hsu, Ke Huy Quan",
      "poster": "https://m.media-amazon.com/images/M/MV5BYTdiOTIyZTQtNmQ1OS00NjZlLWIyMTgtYzk5Y2M3ZDVmMDk1XkEyXkFqcGdeQXVyMTAzMDg4NzU0._V1_SX300.jpg"
    },
    {
      "title": "Interstellar",
      "year": "2014",
      "language": "English",
      "rating": 4.5,
      "review": "Nolan's ambitious space epic that combines hard science with emotional storytelling. A father's love transcends space and time in this visually stunning meditation on humanity's future.",
      "genre": "Drama, Sci-Fi",
      "director": "Christopher Nolan",
      "actors": "Matthew McConaughey, Anne Hathaway, Jessica Chastain",
      "poster": "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
    },
    {
      "title": "A Clockwork Orange",
      "year": "1971",
      "language": "English",
      "rating": 4.4,
      "review": "Kubrick's controversial dystopian masterpiece about violence, free will, and social conditioning. Malcolm McDowell's Alex DeLarge is both charismatic and disturbing in this unforgettable film.",
      "genre": "Crime, Drama, Sci-Fi",
      "director": "Stanley Kubrick",
      "actors": "Malcolm McDowell, Patrick Magee, Michael Bates",
      "poster": "https://m.media-amazon.com/images/M/MV5BMTY3MjM1Mzc4N15BMl5BanBnXkFtZTgwODM0NzAxMDE@._V1_SX300.jpg"
    },
    {
      "title": "12 Angry Men",
      "year": "1957",
      "language": "English",
      "rating": 4.9,
      "review": "A masterclass in screenwriting and ensemble acting. Set almost entirely in one room, this courtroom drama explores prejudice, justice, and the power of reasonable doubt.",
      "genre": "Crime, Drama",
      "director": "Sidney Lumet",
      "actors": "Henry Fonda, Lee J. Cobb, Martin Balsam",
      "poster": "https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg"
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