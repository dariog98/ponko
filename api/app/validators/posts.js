import { check } from "express-validator";
import { validateResult } from "../helpers/validateHelper.js";

const validateCreate = [
    check('userId')
        .exists()
        .isNumeric()
        .not()
        .isEmpty(),
    check('content')
        .exists()
        .isLength({ max: 140 }),
    (request, response, next) => {
        validateResult(request, response, next)
    }
]

const validateEdit = [
    check('id')
        .exists()
        .isNumeric()
        .not()
        .isEmpty(),
    check('content')
        .exists()
        .isLength({ max: 140 }),
    (request, response, next) => {
        validateResult(request, response, next)
    }
]

export { validateCreate, validateEdit }