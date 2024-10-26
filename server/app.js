import express from 'express';
import cors from 'cors';
import dotenv from "dotenv";
import { sendEmail } from './utils/sendEmail.js';

dotenv.config({ path: "./config.env" });

const app = express();

app.use(cors({
    origin: "http://localhost:5173", // set to your frontend origin
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(express.json());  
app.use(express.urlencoded({ extended: true }));  

// Routes
app.post('/send/email', async (req, res) => {
    const { name, email, message } = req.body;
    console.log(name, email, message);  
    if (!name || !email || !message) {
        return res.status(400).json({
            success: false,
            message: "Please provide all details",
        });
    }

    try {  
        await sendEmail({
            email: "shuklalkesh@gmail.com",
            subject: "ECOFLEX GYM WEBSITE CONTACT",
            message,
            userEmail: email,
        });
        
        res.status(200).json({
            success: true,
            message: "Message Sent Successfully.",
        });
    } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
