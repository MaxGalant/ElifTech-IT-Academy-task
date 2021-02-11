const mySql=require("mysql")
const db =mySql.createConnection({
    host: "localhost",
    user: 'root',
    password: "password",
    database: "ami_sa_db"
})
module.exports =db