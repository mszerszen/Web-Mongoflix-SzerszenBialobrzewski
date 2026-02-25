import { MongoClient } from "mongodb"
import { argv } from "node:process"

const [ _, __, database, collection, host, port ] = argv
const url = `mongodb://${host ?? "localhost"}:${port ?? "27017"}/${database}`

assert(database, "database wasn't provided as the first argument in argv")
assert(collection, "collection wasn't provided as the second argument in argv")

const client = new MongoClient(url)

console.log(url)

async function main() {
    try {
        await client.connect()
        console.log("connect OK")
    } finally {
        await client.close()
    }
}

main().catch(console.log)