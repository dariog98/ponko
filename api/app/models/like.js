import { DataTypes } from "sequelize"
import sequelize from "../config/mysql.js"

const Like = sequelize.define(
    "likes",
    {
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        postId: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        timestamps: false
    }
)
export default Like