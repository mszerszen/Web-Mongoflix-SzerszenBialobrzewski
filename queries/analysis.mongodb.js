import { MongoClient } from "mongodb"
import { argv } from "node:process"

const [ _, __, host, port ] = argv
const url = `mongodb://${host ?? "localhost"}:${port ?? "27017"}`

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