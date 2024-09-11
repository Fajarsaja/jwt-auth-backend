import db from "../config/database.js";
import { Sequelize } from "sequelize";

const {DataTypes} = Sequelize

const Users = db.define('users', {
    name:{
        type: DataTypes.STRING
    },
    email:{
        type: DataTypes.STRING
    },
    password:{
        type: DataTypes.STRING
    },
    refresh_token:{
        type: DataTypes.TEXT
    },
})

export default Users