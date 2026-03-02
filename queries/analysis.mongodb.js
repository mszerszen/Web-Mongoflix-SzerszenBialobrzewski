db = db.getSiblingDB('filmy_bs');

print("FILMY AKCJI PO 2000 (Bo nie ma żadnych po 2020): ")
db.filmy.aggregate([
    { $match: { genres: "Action" } },
    {
        $addFields: {
            releaseYear: {
                $toInt: {
                    $substrCP: [
                        "$releaseDate",
                        { $subtract: [ { $strLenCP: "$releaseDate" }, 4 ] },
                        4
                    ]
                }
            }
        }
    },
    {
        $match: {
            releaseYear: { $gt: 2000 }
        }
    }
]).forEach(doc => printjson(doc))

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