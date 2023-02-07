import { Router } from "express";
import { loginCtrl, registerCtrl } from "../controlers/auth.js"
import { validateCreate } from "../validators/user.js"

const authRouter = Router()

authRouter.post('/login', loginCtrl)
authRouter.post('/register', validateCreate, registerCtrl)

export default authRouter