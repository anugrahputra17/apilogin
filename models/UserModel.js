import sequelize from "sequelize";
import db from "../config/database.js";

const { DataTypes } = sequelize;

const Users = db.define('user',{
    name:{
        type: DataTypes.STRING
    },
    birthDate:{
        type: DataTypes.DATE
    },
    phone:{
        type: DataTypes.INTEGER
    },
    email:{
        type: DataTypes.STRING
    },
    password:{
        type: DataTypes.STRING
    },
    refresh_token:{
        type: DataTypes.TEXT
    }
},{
    freezeTableName:true
});

export default Users;

(async()=>{
    await db.sync();
})();