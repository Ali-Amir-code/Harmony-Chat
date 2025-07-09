import express, { json } from 'express';
const app = express();
import authRoutes from './routes/auth.js';
import cors from 'cors';

app.use(cors()); // for frontend/backend dev
app.use(json()); // to read JSON body
app.use('/api/auth', authRoutes); // use the auth routes

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
