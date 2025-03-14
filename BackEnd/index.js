import express from 'express'
import dotenv from 'dotenv'

const app = express()
dotenv.config();

const PORT = process.env.PORT;
//for the leackage detection 
app.post('/event/leackage_alert', async(res, req, next) => {
    res.send(data)
})
//for the motion
app.post('/event/motion_detected', async(res, req, next) => {
    res.send(data)
})
//
app.post('/event/', async(res, req, next) => {
    res.send(data)
})

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})
