// === server.js (mock mode for offline development) ===
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
// import { PrismaClient } from '@prisma/client'; // disabled for mock mode

dotenv.config();
const app = express();
// const prisma = new PrismaClient(); // disabled while offline

app.use(cors());
app.use(express.json());

// POST /api/bookings - Mocked
app.post('/api/bookings', async (req, res) => {
  try {
    console.log('🔧 Booking request received (mock mode):', req.body);
    // Pretend we saved it
    res.status(201).json({ success: true, mode: 'mock', data: req.body });
  } catch (error) {
    console.error('Error (mock mode):', error);
    res.status(500).json({ success: false, error: 'Mock mode error' });
  }
});

// Health check
app.get('/', (req, res) => {
  res.send('Booking API is running (mock mode) ✅');
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`🚀 Mock server listening on port ${PORT}`));
