import { check } from "express-validator";
import { validateResult } from "../helpers/validateHelper.js";

const validateCreate = [
    check('username')
        .exists()
        .not()
        .isEmpty(),
    check('password')
        .exists()
        .not()
        .isEmpty()
        .isLength({ min: 8 }),
    (request, response, next) => {
        validateResult(request, response, next)
    }
]

export { validateCreate }