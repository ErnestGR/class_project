require("dotenv").config();
module.exports = {
    development:{
        username: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_NAME,
        host: process.env.DATABASE_URL,
        dialect: "mysql"
    },
    test: {
        username: "root",
        password: null,
        database: "testdb",
        host: "localhost",
        dialect: "mysql",
        logging: false
    },
    production: {
        username: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_NAME,
        host: process.env.DATABASE_URL,
        dialect: "mysql"
    },
}