import jwt from 'jsonwebtoken';

const tokenSign = async (user) => {
    return jwt.sign(
        {
            id: user.id,
            username: user.username,
            role: user.role
        },
        process.env.JWT_SECRET,{
            expiresIn: "2h",
        }
    )
    
}

const verifyToken = async (token) => {
    try {
        return jwt.verify(token, process.env.JWT_SECRET)
    } catch(error) {
        return null
    }
}

const decodeSign = async (token) => {

}

export { tokenSign, verifyToken, decodeSign }