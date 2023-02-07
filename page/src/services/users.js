import { RouteAPI } from "../constants/RoutesAPI"

const login = async (credentials) => {
    const url = `${RouteAPI.Auth}/login`

    const config = {
        method: 'POST', 
        mode: 'cors',
        headers: {    
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    }

    const request = fetch(url, config)
    return request
}

const userServices = { login }

export default userServices