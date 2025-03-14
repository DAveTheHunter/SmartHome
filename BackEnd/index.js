import express from 'express'
import dotenv from 'dotenv'

const app = express()
dotenv.config();
express.use(express.json())

const PORT = process.env.PORT;
app.post('api/alerts', (res, req) => {
    const data = req.body;
    switch(data.event){
        case blockage_alert:
            res.send(data.message)
            break;
        case leackage_alert:
            res.send(data.message)
            break;
        case motion_detected:
            res.send(data.message)
            break;
        default:
            res.send(data.message)
            break;
    }
})

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})
