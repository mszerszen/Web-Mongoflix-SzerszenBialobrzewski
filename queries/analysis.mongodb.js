db = db.getSiblingDB('filmy_bs');

const genre = "Action";
const year = 2008;

print("SZUKANIE PO GATUNKU")
db.filmy.find(
    { genres: genre },
    { title: 1, genres: 1, _id: 0 }
).forEach(doc => printjson(doc))

print("\nFILTROWANIE PO ROKU")
db.filmy.find(
    { releaseYear: year },
    { title: 1, genres: 1, _id: 0 }
).forEach(doc => printjson(doc))

print("\nŚREDNIA OCEN DLA KAŻDEGO GATUNKU")
db.filmy.aggregate([
    { $unwind: "$genres" },
    { $unwind: "$reviews" },
    {
        $group: {
            _id: "$genres",
            averageRating: { $avg: "$reviews.ocena" }
        }
    },
    {
        $project: {
            _id: 0,
            genre: "$_id",
            averageRating: { $round: ["$averageRating", 2] }
        }
    }
]).forEach(doc => printjson(doc))

print("\nDODANIE FILMÓW FEATURED")
db.filmy.updateMany(
    { views: { $gt: 1200000 } },
    { $set: { featured: true } }
);

print("\nLICZBA WYŚWIETLEŃ DLA REŻYSERÓW ")
db.filmy.aggregate([
    {
        $group: {
            _id: "$director",
            totalViews: { $sum: "$views" }
        }
    }
]).forEach(doc => printjson(doc))