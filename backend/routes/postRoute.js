import express from "express"
import {  createPost, getPosts } from "../controllers/postController.js"
const router=express.Router()
router.route("/posts").get(getPosts).post(createPost)
export default router