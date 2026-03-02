db = db.getSiblingDB('filmy_bs');

print("FILMY AKCJI PRZED 2000 (Bo nie ma żadnych po 2020): ")
db.filmy.find({
    genres: "Action",
    releaseDate: { $lt: "31-12-2000" }
}).forEach(doc => printjson(doc))

print("\nŚREDNIA OCEN FILMÓW: ")
db.filmy.aggregate([
    {
        $unwind: "$reviews"
    },
    {
        $group: {
            _id: null,
            average: { $avg: "$reviews.ocena" }
        }
    }
]).forEach(doc => printjson(doc.average))

print("\nLICZBA WYŚWIETLEŃ DLA REŻYSERÓw ")
db.filmy.aggregate([
    {
        $group: {
            _id: "$director",
            totalViews: { $sum: "$views" }
        }
    }
]).forEach(doc => printjson(doc))