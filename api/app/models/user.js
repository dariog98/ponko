import { DataTypes } from "sequelize"
import sequelize from "../config/mysql.js"
import Image from "./image.js"
import UserImage from "./userimage.js"

const User = sequelize.define(
    "users",
    {
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        color: {
            type: DataTypes.STRING,
            allowNull: true
        }
    }, 
    { 
        defaultScope: {
            attributes: { exclude: ['password'] }
        },
        scopes: {
            withPassword: {
                attributes: {},
            }
        },
        timestamps: false
    }
)

UserImage.belongsTo(
    User, {
        foreignKey: "userId"
    }
)

UserImage.belongsTo(
    Image, {
        foreignKey: "imageId"
    }
)

User.hasOne(
    UserImage, {
        foreignKey: "id",
        as: "avatar"
    }
)

User.getByUsername = (username) => {
    return User.scope('withPassword').findOne({
        where: { username },
        include: { model: UserImage, include: [{ model: Image }], as: "avatar" }
    })
}

export default User