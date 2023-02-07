import BlogPreview from "../components/BlogPreview"
import { useState, useEffect } from 'react'
import { APIBLOGS } from '../constants'

function BlogsPage() {
    const [blogs, setBlogs] = useState([]);

    useEffect( () => {
        const fetchBlogs = async () => {
            try {
                const response = await fetch(APIBLOGS)
                if (response.ok) {
                    const blogs = await response.json()
                    setBlogs(blogs)
                } else {
                  console.log(response);
                }
            } catch (error) {
                console.log('fetchPosts: ' + error.message);
            }
        }
        fetchBlogs()
    }, [])

    return (
        <div className="flex flex-column justify-content-center align-items-center padding-1 gap-1">
            {blogs.map(blog => <BlogPreview data={blog}/>)}
        </div>
    )
}

export default BlogsPage