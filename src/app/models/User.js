import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const schema = new mongoose.Schema({
  name: { type: String },
  email: { type: String },
  password: { type: String, require: true, select: false },
  createdAt: { type: Date, default: new Date() },
  updatedAt: { type: Date, default: new Date() },
});

schema.pre('save', async function (next) {
  this.password = await bcrypt.hash(this.password, 8);
  return next();
});

module.exports = mongoose.model('User', schema);
