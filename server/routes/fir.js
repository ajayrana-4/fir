const express = require('express');
const router = express.Router();
const FIR = require('../models/FIR');
const User=require('../models/User');

// 🚨 No token middleware anymore

// 👉 Create FIR (open to all)
router.post('/', async (req, res) => {
  try {
    const { name, email, phone, address, complaint } = req.body;
    const fir = await FIR.create({ name, email, phone, address, complaint });
    res.status(201).json({ message: 'FIR submitted', fir });
  } catch (err) {
    res.status(500).json({ error: 'Error submitting FIR' });
  }
});

// 👉 Get all FIRs (open — useful for admin dashboard later)
router.get('/', async (req, res) => {
  try {
    const firs = await FIR.find();
    res.json(firs);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching FIRs' });
  }
});

// 👉 Update FIR status (optional admin use — still public here)
router.put('/:id', async (req, res) => {
  try {
    const fir = await FIR.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(fir);
  } catch (err) {
    res.status(500).json({ error: 'Error updating FIR' });
  }
});

module.exports = router;
