db = db.getSiblingDB("moviesSB")

db.movies.drop();
console.log("--- START ---")

db.movies.insertMany([
    {
        title: "Inception",
        releaseDate: "16-07-2010",
        genres: ["Sci-Fi", "Thriller", "Action"],
        director: "Christopher Nolan",
        cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page"],
        reviews: [
            {email: "user1@example.com", ocena: 9, recenzja: "Mistrzowski film z niesamowitą fabułą."},
            {email: "user2@example.com", ocena: 8, recenzja: "Świetne efekty specjalne, czasami trudny do śledzenia."},
            {email: "user3@example.com", ocena: 10, recenzja: "Najlepszy film o snach!"}
        ],
        premium: true,
        views: 1250000
    },
    {
        title: "The Shawshank Redemption",
        releaseDate: "14-10-1994",
        genres: ["Drama"],
        director: "Frank Darabont",
        cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
        reviews: [
            {email: "reviewer1@example.com", ocena: 10, recenzja: "Ponadczasowa opowieść o nadziei."},
            {email: "reviewer2@example.com", ocena: 9, recenzja: "Fantastyczne aktorstwo i scenariusz."},
            {email: "reviewer3@example.com", ocena: 9, recenzja: "Nie mogę się nadziwić, jak dobry jest ten film."}
        ],
        premium: false,
        views: 890000
    },
    {
        title: "The Godfather",
        releaseDate: "24-03-1972",
        genres: ["Crime", "Drama"],
        director: "Francis Ford Coppola",
        cast: ["Marlon Brando", "Al Pacino", "James Caan"],
        reviews: [
            {email: "fan1@example.com", ocena: 10, recenzja: "Arcydzieło kina gangsterskiego."},
            {email: "fan2@example.com", ocena: 9, recenzja: "Niepowtarzalna atmosfera i muzyka."},
            {email: "fan3@example.com", ocena: 10, recenzja: "Każda scena to klasa sama w sobie."}
        ],
        premium: true,
        views: 1020000
    },
    {
        title: "Parasite",
        releaseDate: "30-05-2019",
        genres: ["Thriller", "Drama"],
        director: "Bong Joon-ho",
        cast: ["Song Kang-ho", "Lee Sun-kyun", "Cho Yeo-jeong"],
        reviews: [
            {email: "viewer1@example.com", ocena: 10, recenzja: "Inteligentny, pełen napięcia film."},
            {email: "viewer2@example.com", ocena: 9, recenzja: "Genialna krytyka społeczna."},
            {email: "viewer3@example.com", ocena: 9, recenzja: "Zaskakujące zwroty akcji."}
        ],
        premium: false,
        views: 730000
    },
    {
        title: "Avengers: Endgame",
        releaseDate: "26-04-2019",
        genres: ["Action", "Adventure", "Sci-Fi"],
        director: "Anthony Russo & Joe Russo",
        cast: ["Robert Downey Jr.", "Chris Evans", "Scarlett Johansson"],
        reviews: [
            {email: "marvel1@example.com", ocena: 9, recenzja: "Epicka kulminacja wszystkich filmów Marvela."},
            {email: "marvel2@example.com", ocena: 8, recenzja: "Trochę długi, ale warty każdej minuty."},
            {email: "marvel3@example.com", ocena: 10, recenzja: "Emocjonalny rollercoaster."}
        ],
        premium: true,
        views: 1500000
    },
    {
        title: "Pulp Fiction",
        releaseDate: "14-10-1994",
        genres: ["Crime", "Drama"],
        director: "Quentin Tarantino",
        cast: ["John Travolta", "Uma Thurman", "Samuel L. Jackson"],
        reviews: [
            {email: "cinephile1@example.com", ocena: 10, recenzja: "Dialogi i sceny kultowe."},
            {email: "cinephile2@example.com", ocena: 9, recenzja: "Nietypowa, ale wciągająca struktura."},
            {email: "cinephile3@example.com", ocena: 9, recenzja: "Tarantino w szczytowej formie."}
        ],
        premium: false,
        views: 980000
    },
    {
        title: "Interstellar",
        releaseDate: "07-11-2014",
        genres: ["Sci-Fi", "Adventure", "Drama"],
        director: "Christopher Nolan",
        cast: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"],
        reviews: [
            {email: "spacefan1@example.com", ocena: 10, recenzja: "Piękne wizualnie i emocjonalnie."},
            {email: "spacefan2@example.com", ocena: 9, recenzja: "Świetna muzyka i zdjęcia."},
            {email: "spacefan3@example.com", ocena: 8, recenzja: "Nieco trudny do zrozumienia, ale genialny."}
        ],
        premium: true,
        views: 1120000
    },
    {
        title: "Forrest Gump",
        releaseDate: "06-07-1994",
        genres: ["Drama", "Romance"],
        director: "Robert Zemeckis",
        cast: ["Tom Hanks", "Robin Wright", "Gary Sinise"],
        reviews: [
            {email: "classic1@example.com", ocena: 10, recenzja: "Niezapomniana rola Toma Hanksa."},
            {email: "classic2@example.com", ocena: 9, recenzja: "Świetnie napisany scenariusz."},
            {email: "classic3@example.com", ocena: 9, recenzja: "Ciepły i wzruszający film."}
        ],
        premium: false,
        views: 860000
    },
    {
        title: "The Dark Knight",
        releaseDate: "18-07-2008",
        genres: ["Action", "Crime", "Drama"],
        director: "Christopher Nolan",
        cast: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
        reviews: [
            {email: "batfan1@example.com", ocena: 10, recenzja: "Heath Ledger jako Joker – legendarny."},
            {email: "batfan2@example.com", ocena: 9, recenzja: "Świetna akcja i napięcie."},
            {email: "batfan3@example.com", ocena: 10, recenzja: "Najlepszy film o Batmanie."}
        ],
        premium: true,
        views: 1400000
    },
    {
        title: "Gladiator",
        releaseDate: "05-05-2000",
        genres: ["Action", "Adventure", "Drama"],
        director: "Ridley Scott",
        cast: ["Russell Crowe", "Joaquin Phoenix", "Connie Nielsen"],
        reviews: [
            {email: "roman1@example.com", ocena: 9, recenzja: "Epicki i emocjonujący."},
            {email: "roman2@example.com", ocena: 8, recenzja: "Świetne walki i muzyka."},
            {email: "roman3@example.com", ocena: 9, recenzja: "Russell Crowe w szczytowej formie."}
        ],
        premium: false,
        views: 970000
    }
])

console.log("--- DATABASE IS READY ---")