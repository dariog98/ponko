import Post from "../components/Post"
import { useParams } from "react-router-dom"
import { useState, useEffect } from 'react'
import postServices from "../services/posts"
import Comment from "../components/Comment"

const PostPage = () =>{
    const params = useParams()
    const [post, setPost] = useState(null)

    const fetchPost = async () => {
        try {
            const response = await postServices.getPost(params.username, params.id)
            if (response.ok) {
                const post = await response.json()
                setPost(post)
            } else {
              console.log(response)
            }
        } catch (error) {
            console.log('fetchPost: ' + error.message)
        }
    }

    useEffect(() => {
        fetchPost()
    }, [params])

    return post ? (
        <div className="flex flex-column justify-content-center align-items-center padding-1 gap-1">
            {<Post data={post}/>}
            {/*post.comments.map((comment, index) => <Post key={index} data={comment}/>)*/}

            {post.comments.length &&
                <div className="post">
                    <div>
                        {post.comments.map((comment, index) => <Comment key={index} data={comment}/>)}
                    </div>
                </div>
            }
        </div>
    ) : null
}

export default PostPage
