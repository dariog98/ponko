import { httpError } from "../helpers/handleErrors.js"
import Image from "../models/image.js"
import Like from "../models/like.js"
import Post from "../models/post.js"
import Shared from "../models/shared.js"
import User from "../models/user.js"
import UserImage from "../models/userimage.js"

const getAllPosts = async (request, response) => {
    try {
        const posts = await Post.findAll({ 
            include: [
                {model: User, include: [{model: UserImage, include: [{model: Image}], as: "avatar"}]}, 
                {model: Post, as: "comments"},
                {model: Like, as: "likes"},
                {model: Shared, as: "shareds"}
            ],
            order: [
                ['id', 'DESC']
            ]
        })

        if (posts) {
            response.send(posts)
        } else {
            response.status(404)
            response.send({ error: 'Not found' })
        }
    } catch (error) {
        httpError(response, error)
    }
}

const getAllUserPosts = async (request, response) => {
    try {
        const { username } = request.params
        const posts = await Post.findAll({
            include: [
                {model: User, include: [{model: UserImage, include: [{model: Image}], as: "avatar"}]}, 
                {model: Post, as: "comments"},
                {model: Like, as: "likes"},
                {model: Shared, as: "shareds"}
            ],
            where: { '$user.username$': username },
            order: [
                ['id', 'DESC']
            ]
        })

        if (posts) {
            response.send(posts)
        } else {
            response.status(404)
            response.send({ error: 'Not found' })
        }
    } catch (error) {
        httpError(response, error)
    }
}


const getPost = async (request, response) => {
    try {
        const { username, id } = request.params
        const post = await Post.findOne({
            where: { id, '$user.username$': username },
            include: [
                {model: User, include: [{model: UserImage, include: [{model: Image}], as: "avatar"}]}, 
                {model: Post, as: "comments", include: [
                    {model: User, include: [{model: UserImage, include: [{model: Image}], as: "avatar"}]}, 
                    {model: Post, as: "comments"},
                    {model: Like, as: "likes"},
                    {model: Shared, as: "shareds"}
                ]},
                {model: Like, as: "likes", include: ["user"]},
                {model: Shared, as: "shareds", include: ["user"]}
            ]
        })

        if (post) {
            response.send(post)
        } else {
            response.status(404)
            response.send({ error: 'Not found' })
        }
    } catch (error) {
        httpError(response, error)
    }
}

const createPost = async (request, response) => {
    try {
        const { idUser, content } = request.body

        const post = await Post.create({
            idUser,
            content
        })
        response.send(post)
    } catch (error) {
        httpError(response, error)
    }
}

const updatePost = async (request, response) => {
    try {
        const { id } = request.params
        const { content } = request.body

        const result = await Turn.update(
            { content },
            { where: { id } }
        )

        if (result) {
            const updatedPost = await Post.findByPk(id)
            response.status(200)
            response.send(updatedPost)
        }
        response.status(500)
    } catch (error) {
        httpError(response, error)
    }
}

const deletePost = async (request, response) => {
    try {
        const { id } = request.params
        const result = await Turn.destroy({ where: { id } })

        if (result) {
            response.status(200)
            response.send({ message: "turn deleted successfully" })
        }
        response.status(500)
        response.send({ message: "an error occurred while trying to delete the turn" })
    } catch (error) {
        httpError(response, error)
    }
}

export {
    getAllPosts,
    getAllUserPosts,
    getPost,
    createPost,
    updatePost,
    deletePost
}