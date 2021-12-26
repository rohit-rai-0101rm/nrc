import express from "express"
import {  createPost, getPost, getPosts } from "../controllers/postController.js"
const router=express.Router()
router.route("/posts").get(getPosts).post(createPost)
router.route("/posts/:id").get(getPost)

export default router