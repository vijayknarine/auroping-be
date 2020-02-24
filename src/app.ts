import express from 'express'
import cors from 'cors'



const app = express()
app.use(cors())

app.listen(8080, (err)=>{

    if(err){
        console.log("Failed to start the server", err)
    }

    console.log("Started Server ")
})
