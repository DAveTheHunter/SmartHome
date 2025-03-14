import express from 'express'
import dotenv from 'dotenv'

const app = express()
dotenv.config();

const PORT = process.env.PORT;
//for the leackage detection 
app.post('/event/leackage_alert/message/Water leackage detected', async(res, req, next) => {
    const data = req.body
    res.send(data)
})
//for the motion
app.post('/event/motion_detected/message/motiondetected', async(res, req, next) => {
    const data = req.body;
    res.send(data)
})
//controll the door
app.post('/event/door_status', async(res, req, next) => {
    res.send(data)
})
//bloakage detaction 
app.post('/event/bloackage_alert', async(res, req, next) => {
    res.send(data)
})
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})
