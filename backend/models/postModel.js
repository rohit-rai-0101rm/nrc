import mongoose from "mongoose";

const messageSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please Enter Your Title"],
    maxLength: [30, "Name cannot exceed 30 characters"],
    minLength: [4, "Name should have more than 4 characters"],
  },
  creator: {
    type: String,
    required: [true, "Please Enter Your name"],
  },
  message: {
    type: String,
    required: [true, "Please Enter Your message"],
    minLength: [8, "Password should be greater than 8 characters"],
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },

});

var Message = mongoose.model("Message", messageSchema);

export default Message;
