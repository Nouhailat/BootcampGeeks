import mongoose from 'mongoose';

const leadSchema = new mongoose.Schema({
  contactName: { type: String, required: true },
  contactEmail: { type: String, required: true },
  companyName: { type: String, required: true },
  status: { 
    type: String, 
    enum: ['PENDING', 'IN_PROGRESS', 'COMPLETED', 'CANCELED'], 
    default: 'PENDING' 
  },
  manager: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  notes: [{ type: String }],
}, { timestamps: true });

export default mongoose.model('Lead', leadSchema);
