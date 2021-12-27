import express from "express"
import {  createPost, deletePost, getPost, getPosts, updatePost } from "../controllers/postController.js"
const router=express.Router()
router.route("/posts").get(getPosts).post(createPost)
router.route("/posts/:id").get(getPost)
router.route('/posts/:id').patch(updatePost);
router.route("/posts/:id").delete(deletePost)


export default router