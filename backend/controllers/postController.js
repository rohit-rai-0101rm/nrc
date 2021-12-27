import express from "express";
import mongoose from "mongoose";
import { catchAsyncErr } from "../middleware/catchAsyncErrors.js";
import cloudinary from "cloudinary";
import Message from "../models/postModel.js";

const router = express.Router();

export const getPosts = catchAsyncErr(async (req, res) => {
  
  const Messages = await Message.find();
  res.status(200).json({
    success:true,
    Messages,
  });
});
  
  
  /* cloudinary.v2.api.resources({
    type: 'upload',
    prefix: 'Stories' // add your folder
  },
   function(error, result) { 
  
    res.status(200).json({
      success: true,
      result,
  });
  
 }) */

export const createPost = catchAsyncErr(async (req, res) => {
  const { title, message, creator } = req.body;
  

  const newMessage = new Message({ title, message,  creator })
  await newMessage.save();

  res.status(201).json({
    success: true,
    newMessage,
  });
});
export const getPost = catchAsyncErr(async (req, res) => { 
  const { id } = req.params;

  
      const post = await Message.findById(id);
      if(!post){
        return res.status(500).json({
            success:false,
            message:"post not found"
        })
    }
      res.status(200).json({
        success:true,
        
        post});
  
})

export const updatePost = catchAsyncErr(async (req, res) => {
  const { id } = req.params;
  const { title, message, creator } = req.body;
  
  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

  const updatedPost = { creator, title, message, _id: id };

  await Message.findByIdAndUpdate(id, updatedPost, { new: true });

  res.json(updatedPost);
})
export const deletePost = catchAsyncErr(async (req, res) => {
  const { id } = req.params;

const message=await Message.findById(id)
if(!message){
  return next(new ErrorHandler(("Product not found", 404)))

}
await message.remove()
res.status(200).json({
  success:true,
  message:"message deleted successfully"
})
})