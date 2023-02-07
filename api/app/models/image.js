import { DataTypes } from "sequelize"
import sequelize from "../config/mysql.js"

const Image = sequelize.define(
    "images",
    {
        filename: {
            type: DataTypes.STRING,
            allowNull: false
        },
        uploadBy: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }
)

export default Image