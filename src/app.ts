import movierouters from "./routes/movie.routes";
import express from 'express';
import 'dotenv/config';
import { connectDB } from './config/db';

const index = express();

// Config
connectDB();

// Middleware
index.use(express.json());
index.use('/api/v1/contact', movierouters);

index.listen(5003, () => {
  console.log('Server is running on port 5000');
});