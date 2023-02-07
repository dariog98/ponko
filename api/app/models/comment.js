import { DataTypes } from "sequelize"
import sequelize from "../config/mysql.js"

const Comment = sequelize.define(
    "comments",
    {
        idPost: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        idComment: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }
)

export default Comment