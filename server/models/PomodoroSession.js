const mongoose = require('mongoose');

const PomodoroSessionSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  type: { type: String, enum: ['Work', 'Break'], required: true },
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('PomodoroSession', PomodoroSessionSchema);
