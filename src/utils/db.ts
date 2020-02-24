import {Pool} from "pg";


const pool = new Pool({
    database: process.env.database,
    user: process.env.user,
    password: process.env.password
})

export {pool}