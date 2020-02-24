import express from 'express'
import cors from 'cors'
import {endpointRoutes} from "./routes/endpoints.route";

const app = express()
app.use(cors())


// bind all routes
app.use('/endpoints', endpointRoutes)

app.listen(8080, (err)=>{

    if(err){
        console.log("Failed to start the server", err)
    }

    console.log("Started Server ")
})
