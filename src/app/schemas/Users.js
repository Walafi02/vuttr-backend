import mongoose from 'mongoose';

const UsersSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password_hash: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
    required: false,
    default: new Date(),
  },
  updated_at: {
    type: Date,
    required: false,
    default: new Date(),
  },
});

export default mongoose.model('Users', UsersSchema);
