import { Router } from "express"
import { getAllUserPosts, getPost } from "../controlers/posts.js"

const router = Router()

router.get('/:username/posts', getAllUserPosts)
router.get('/:username/posts/:id', getPost)

export default router