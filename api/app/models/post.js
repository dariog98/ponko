import { DataTypes } from "sequelize"
import sequelize from "../config/mysql.js"
import Like from "./like.js"
import Shared from "./shared.js"
import User from "./user.js"

const Post = sequelize.define(
    "posts",
    {
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        content: {
            type: DataTypes.STRING,
            allowNull: true
        }
    }
)

const PostComment = sequelize.define(
    'postcomments', {}, 
    {
        timestamps: false
    }
)

Post.belongsTo(
    User, {
        foreignKey: "userId"
    }
)

Like.belongsTo(
    User, {
        foreignKey: "userId"
    }
)

Like.belongsTo(
    Post, {
        foreignKey: "postId"
    }
)

Post.hasMany(
    Like,{
        foreignKey: "id"
    }
)

Shared.belongsTo(
    User, {
        foreignKey: "userId"
    }
)

Shared.belongsTo(
    Post, {
        foreignKey: "postId"
    }
)

Post.hasMany(
    Shared,{
        foreignKey: "id"
    }
)

Post.belongsToMany(Post, { as: "comments", through: PostComment })

export default Post