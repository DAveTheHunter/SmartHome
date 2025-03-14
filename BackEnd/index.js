import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'

const app = express();
dotenv.config();
app.use(cors())
app.use(express.json());

const PORT = process.env.PORT || 8000;
let status = {};
app.post('/api/alerts', (req, res) => {  
        const data = req.body;
       if(data.event === 'blockage_alert'){
               status = data.message;
               res.send(data.message);
               console.log(data);
       }
       if(data.event === 'leakage_alert'){
        status = data.message;
        res.send(data.message);
        console.log(data);
       }
       if(data.event === 'motion_detected'){
        status = data.message;
        res.send(data.message);
        console.log(data);
       }
    });    
app.get('/api/alerts', (req, res) => {
    res.status(200).send(status);
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
