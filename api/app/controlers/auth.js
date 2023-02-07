import { tokenSign } from "../helpers/generateToken.js"
import { getUserColor } from "../helpers/generateUserColor.js"
import { encrypt, compare } from "../helpers/handleBcrypt.js"
import { httpError } from "../helpers/handleErrors.js"
import User from "../models/user.js"

const loginCtrl = async (request, response) => {
    try {
        const { username, password } = request.body

        const user = await User.getByUsername(username)
        
        if (!user) {
            response.status(404)
            response.send({
                error: 'User not found'
            })
            return
        }

        const checkPassword = await compare(password, user.password)
        const tokenSession = await tokenSign(user)

        if (checkPassword) {
            response.send({
                id: user.id,
                username: user.username,
                avatar: user.avatar,
                color: user.color,
                token: tokenSession
            })
        } else {
            response.status(409)
            response.send({
                error: 'Invalid password'
            })
        }
    } catch (error) {
        httpError(response, error)
    }
}

const registerCtrl = async (request, response) => {
    try {
        const { username, password } = request.body
        const passwordHash = await encrypt(password)
        
        const user = await User.create({
            username: username, 
            password: passwordHash,
            color: getUserColor(username)
        })
        response.status(201)
        response.send({
            id: user.id,
            username: user.username
        })
    } catch (error) {
        httpError(response, error)
    }
}

export { loginCtrl, registerCtrl }