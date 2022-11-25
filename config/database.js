import sequelize from "sequelize";

const db = new sequelize('d88e182dkcfs1b','thfsxqwjfkjklr','8f86a5316f0befd189fbe1f2ecadaa9525c0d7de5f65e0e5f077cf85d3a7737c',{
    host: "ec2-54-80-123-146.compute-1.amazonaws.com",
    dialect: "postgres"
});

export default db;
