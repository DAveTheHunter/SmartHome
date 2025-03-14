import express from 'express';
import dotenv from 'dotenv';

const app = express();
dotenv.config();
app.use(express.json());

const PORT = process.env.PORT || 8000;

app.post('/api/alerts', (req, res) => {  
    const data = req.body;

    switch (data.event) {
        case 'blockage_alert':              
            res.send(data.message);
            console.log(data);
            break;
        case 'leakage_alert':               
            res.send(data.message);
            break;
        case 'motion_detected':
            res.send(data.message);
            break;
        default:
            res.send("Unknown event");
            break;
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
