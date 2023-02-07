import { Router } from "express"
import { getAllPosts, createPost, updatePost, deletePost } from "../controlers/posts.js"
import { checkAuth } from "../middleware/auth.js";
import { validateCreate, validateEdit } from "../validators/posts.js";

const router = Router()

router.get('/', getAllPosts)
//router.get('/:id', getPost)
router.post('/', checkAuth, validateCreate, createPost)
router.patch('/:id', checkAuth, validateEdit ,updatePost)
router.delete('/:id', checkAuth, deletePost)

export default router