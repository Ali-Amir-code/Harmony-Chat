import mongoose from 'mongoose';

const conversationSchema = new mongoose.Schema(
  {
    type: { type: String, enum: ['dm', 'group'], required: true },
    participants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }],
    groupInfo: {
      name: String,
      admin: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
      icon: String,
    },
    lastMessage: { type: mongoose.Schema.Types.ObjectId, ref: 'Message' },
    lastActivity: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

// Indexes
conversationSchema.index({ participants: 1 });
conversationSchema.index({ lastActivity: -1 });

const Conversation = mongoose.model('Conversation', conversationSchema);

export default Conversation;