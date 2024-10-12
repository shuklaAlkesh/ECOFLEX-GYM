import express from 'express';
import cors from 'cors';
import { sendEmail } from './utils/sendEmail.js';
import dotenv from "dotenv";

const app = express();
const router = express.Router();

dotenv.config({ path: "./config.env" });

app.use(cors({
    origin: process.env.CLIENT_SIDE_API, 
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
router.post('/send/email', async (req, res) => {
    const { name, email, message } = req.body;
    
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

app.use(router); // Mount the router

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});
