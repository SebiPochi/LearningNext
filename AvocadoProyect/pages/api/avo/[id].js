import Database from "../../../database/db"
// import { NextApiRequest, NextApiResponse } from "next"

const getAvobyId = async (req, res) => {
    const db = new Database()
    const id = req.query.id

    const entry = await db.getById(id)

    res.status(200).json({data: entry})
}

export default getAvobyId