import { DataTypes } from "sequelize"
import sequelize from "../config/mysql.js"

const UserImage = sequelize.define(
    "userimages", {
        userId: {
            type: DataTypes.STRING,
            allowNull: false
        },
        imageId: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        timestamps: false
    }
)

export default UserImage