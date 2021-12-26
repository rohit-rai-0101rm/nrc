import express from "express";
import mongoose from "mongoose";
import { catchAsyncErr } from "../middleware/catchAsyncErrors.js";
import cloudinary from "cloudinary";
import Message from "../models/postModel.js";

const router = express.Router();

export const getPosts = catchAsyncErr(async (req, res) => {
  
  const Messages = await Message.find();
  res.status(200).json({
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

export default router;