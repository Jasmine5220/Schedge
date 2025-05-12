const express = require('express');
const router = express.Router();
const PomodoroSession = require('../models/PomodoroSession');
const auth = require('../middleware/auth');

router.get('/', auth, async (req, res) => {
  const sessions = await PomodoroSession.find({ userId: req.user.id }).sort({ timestamp: -1 });
  res.json(sessions);
});

router.post('/', auth, async (req, res) => {
  const session = new PomodoroSession({ userId: req.user.id, type: req.body.type });
  await session.save();
  res.status(201).json(session);
});

module.exports = router;
