import express from "express"
import authRouter from "./auth.js"
import postRouter from "./posts.js"
import userRouter from "./users.js"

const router = express.Router()
router.use('/posts', postRouter)
router.use('/auth', authRouter)
router.use('/users', userRouter)
router.use('/images', express.static('./app/storage'))

router.get('*', (request, response) => {
    response.status(404)
    response.send({ error: 'Route not found' })
})

export default router