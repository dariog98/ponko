import { DataTypes } from "sequelize"
import sequelize from "../config/mysql.js"

const Shared = sequelize.define(
    "shareds",
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
export default Shared