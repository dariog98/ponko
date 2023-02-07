// http://localhost:3001/artist/00000001
// http://localhost:3001/album/00000001
// http://localhost:3001/track/00000001
// http://localhost:3001/user/goirad

import * as dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import router from './app/routes/index.js'

dotenv.config()

const app = express()
app.use(express.json())
app.use(cors({
    origin: '*',
    methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}))
/*
app.get('/', (request, response) => {
    response.send('Ponko API')
})

app.get('/images/:file', function (request, response) {
    const filename = request.params.file
    const { pathname } = new URL('./', import.meta.url)

    const filepath = `${pathname}/images/${filename}`

    if (fs.existsSync(filepath)) {
        response.sendFile(filepath);
    } else {
        response.sendStatus(404).end()
    }
})

app.get('/posts', (request, response) => {
    const posts = getPosts()

    response.json(posts)
})

app.get('/post/:id', (request, response) => {
    const id = request.params.id

    if (id.length == idLength) {
        const post = getPost(parseInt(id))

        if (post) {
            response.json(post)
        } else {
            response.sendStatus(404).end()
        }
    } else {
        response.sendStatus(500).end()
    }
})

app.get('/blogs', (request, response) => {
    const blogs = getBlogs()
    response.json(blogs)
})*/

app.use(router)

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})