import Database from "../../../database/db"

const allAvos = async (req, res) => {
    const db = new Database()
    const allEntries = await db.getAll()
    const length = allEntries.length

    res.statusCode = 200
    res.end(JSON.stringify({data: allEntries, length}))
}

export default allAvos