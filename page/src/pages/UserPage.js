import {useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import postServices from "../services/posts"
import PostForm from "../components/PostForm"
import Post from "../components/Post"

const UserPage = () => {
    const params = useParams()
    const [posts, setPosts] = useState([])

    const handlePosts = (newPost) => {
        setPosts([ newPost, ...posts ])
    }

    const fetchPosts = async () => {
        try {
            const response = await postServices.getAllUserPosts(params.username)
            if (response.ok) {
                const posts = await response.json()
                setPosts(posts)
            } else {
              console.log(response)
            }
        } catch (error) {
            console.log('fetchPosts: ' + error.message);
        }
    }

    useEffect(() => {
        fetchPosts()
    }, [])

    return (
        <div className="flex flex-column justify-content-center align-items-center padding-1 gap-1">
            <PostForm handlePosts={handlePosts}/>
            {posts.map((post, index)=> <Post key={index} data={post}/>)}
        </div>
    )
}

export default UserPage