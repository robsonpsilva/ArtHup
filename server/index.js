const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// --- Middlewares ---
app.use(cors());
app.use(express.json()); // Essential for parsing JSON bodies

// --- Database Configuration ---
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  // ssl: { rejectUnauthorized: false } // Required for some Cloud DBs (Render/Supabase)
});

// Test connection
pool.connect((err) => {
  if (err) console.error('❌ Connection error:', err.stack);
  else console.log('✅ DB Connected');
});

// --- API Routes ---

// Health check
app.get('/', (req, res) => res.send('ArtHup API Running...'));

// Get all products
app.get('/api/products', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM products ORDER BY id ASC');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Create product with JSONB storytelling data
app.post('/api/products', async (req, res) => {
  const { name, niche, price, storytelling_data } = req.body;
  try {
    const query = 'INSERT INTO products (name, niche, price, storytelling_data) VALUES ($1, $2, $3, $4) RETURNING *';
    const values = [name, niche, price, storytelling_data];
    const result = await pool.query(query, values);
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => console.log(`🚀 Server on port ${PORT}`));