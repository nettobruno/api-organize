import mongoose, { Schema } from 'mongoose';

const schema = new mongoose.Schema({
  title: { type: String },
  active: { type: Boolean },
  createdById: { type: Schema.Types.ObjectId, ref: 'User' },
  createdAt: { type: Date, default: new Date() },
  updatedAt: { type: Date, default: new Date() },
});

module.exports = mongoose.model('Item', schema);
