import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import pdfRoutes from './routes/pdfRoutes';
import userRoutes from './routes/userRoutes'; // Placeholder for user routes

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
    origin: '*', // Adjust for production
}));
app.use(express.json());
app.use('/api/users', userRoutes); // User routes
app.use('/api/pdf', pdfRoutes); // PDF generation routes
app.use((req: Request, res: Response, next) => {
    console.log(`${req.method} request for '${req.url}'`);
    next();
});

app.get('/', (req: Request, res: Response) => {
    res.send('API is running');
});

// MongoDB connection
mongoose.connect(process.env.MONGO_URI as string)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
