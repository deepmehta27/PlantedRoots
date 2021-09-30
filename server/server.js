const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const mysql = require('mysql');
const { response } = require('express');

//initilize
const app = express();
dotenv.config();
const connection = mysql.createConnection({
    user: process.env.USER,
    host: process.env.HOST,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    port: process.env.DATABASE_PORT,
});


app.use(cors());
app.use(express.json());  //parse incoming data as json
app.use(express.urlencoded({ extended:false }));


//creating routes
//storing data to database
app.post('/register', (request, response) => {

    const uname=request.body.username;
    const pass=request.body.password;
    const phone=request.body.phone;
    const email=request.body.email;

    connection.query(
        "INSERT INTO users_registered (username, password, phone, email) VALUES (?,?,?,?)",
        [uname, pass, phone, email],
        (error, result) => {
            console.log(error);
        }
    );
});


app.post('/login', (request,response) => {

    const uname=request.body.username;
    const pass=request.body.password;

    connection.query(
        "SELECT * FROM users_registered WHERE username = ? AND password = ?",
        [uname,pass],
        (error,result) => {
            
            if(error){
                response.send({error: error});
            }
            if(result.length>0){
                response.send(result);  //sending the result of the query to the frontend
            }
            else{
                response.send({message: 'Wrong username/password!'});
            }
        }
    );

});


//listening on a port
app.listen(process.env.PORT, () => console.log("server is running!!"));