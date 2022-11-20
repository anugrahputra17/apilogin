import sequelize from "sequelize";

const db = new sequelize('restapi','root','',{
    host: "localhost",
    dialect: "mysql"
});

export default db;
