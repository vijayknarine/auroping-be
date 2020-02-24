import {pool} from "../utils/db";
import {Endpoint} from "../types/Endpoints.type";
import {ExpressError} from "../utils/errors";


const getEndpoint =async (id: number):Promise<Endpoint> =>{
    try{
        let {rows} = await pool.query("select * from endpoints where id=$1", [id])
        if(rows.length ===0){
            throw new Error("NO RECORD FOUND")
        }
        return rows[0]
    }catch (e) {
        throw new ExpressError(e.message, 500)
    }
}

export {getEndpoint}