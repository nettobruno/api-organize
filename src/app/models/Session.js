import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  userId: { type: mongoose.Types.ObjectId },
  token: { type: String },
  createdAt: { type: Date, default: new Date() },
  updatedAt: { type: Date, default: new Date() },
});

module.exports = mongoose.model('Session', schema);
