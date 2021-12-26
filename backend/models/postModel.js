import mongoose from 'mongoose';

const messageSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
  
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var Message = mongoose.model('Message', messageSchema);

export default Message;