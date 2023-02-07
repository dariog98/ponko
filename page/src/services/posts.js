import { RouteAPI } from "../constants/RoutesAPI"

const getAllPosts = () => {
    /*
    const token = getToken()
    */
    const config = {
        method: 'GET', 
        mode: 'cors',
        headers: {    
            'Content-Type': 'application/json'
        }
    }

    const request = fetch(RouteAPI.Posts, config)
    return request
}

const getAllUserPosts = (username) => {
    /*
    const token = getToken()
    */
    const config = {
        method: 'GET', 
        mode: 'cors',
        headers: {    
            'Content-Type': 'application/json'
        }
    }

    const url = `${RouteAPI.Users}/${username}/posts`
    const request = fetch(url, config)
    return request
}


const getPost = (username, id) => {
    const config = {
        method: 'GET', 
        mode: 'cors',
        headers: {    
            'Content-Type': 'application/json'
        }
    }

    const url = `${RouteAPI.Users}/${username}/posts/${id}`
    const request = fetch(url, config)
    return request
}

const createPost = (post, token) => {
    const config = {
        method: 'POST', 
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(post)
    }

    const request = fetch(RouteAPI.Posts, config)
    return request
}

const postServices = { getAllPosts, getAllUserPosts, getPost, createPost }

export default postServices