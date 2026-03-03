const fs = require('fs');

db = db.getSiblingDB('filmy_bs');

db.filmy.drop();

const file = fs.readFileSync('data/movies.json', 'utf8');

const data = JSON.parse(file);

db.filmy.insertMany(data);