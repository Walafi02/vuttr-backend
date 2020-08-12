import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

const ToolsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: false,
  },
  link: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: false,
  },
  tags: [
    {
      type: String,
    },
  ],
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users',
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

ToolsSchema.plugin(mongoosePaginate);

export default mongoose.model('Tools', ToolsSchema);
