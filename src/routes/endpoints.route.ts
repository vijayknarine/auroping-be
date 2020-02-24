import express from 'express'
import {getEndpoint} from "../controllers/endpoints.controller";


const endpointRoutes = express.Router()

endpointRoutes.get('/:id', async (req, res, next)=>{
        try{
            let endpoint = await getEndpoint(parseInt(req.params.id))
            res.json(endpoint)
        }catch (e) {
            next(e)
        }
})


export {endpointRoutes}