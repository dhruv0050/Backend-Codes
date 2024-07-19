const express = require('express')
const app = express();
const cookieParser = require('cookie-parser')
const bcrypt = require('bcrypt')
const jwt= require('jsonwebtoken')

app.use(cookieParser());

app.get('/', (req,res) =>{
    let token = jwt.sign({email : "dhruv@gmail.com"},"secret_key");
    console.log(token);
    res.cookie("name", "dhruv123")                                              //Setting cookie
    res.send("done")
    console.log("cookie established") 
    bcrypt.genSalt(10, (err,salt) =>{                                           //encrypting a password
        bcrypt.hash("Mypassword", salt, (err,hash) =>{
            console.log(hash);
        })
    })
    bcrypt.compare("Mypassword", "$2b$10$5FNmTPm0qgqPD70pWX9E4Oucj7U9de.kqyevOzaJOr5X1aWvjt28e",(err,result)=>{  
        console.log(result);                                         //THis is used to compare a hash with password:
                                                                     //If result==true =>matched else  different 
    })               
});
app.get('/read', (req,res) =>{
    res.send("Checking Cookie ")               //Checking if cookie still remains there for other route
    console.log("On read route ")           
    console.log(req.cookies);                  //reading cookies [package used==  npm i cookie-parser]
})

app.get('/jwt', (req,res) =>{
    let token = jwt.sign({email : "dhruv@gmail.com"},"secret_key");              //JsonWebToken
    res.cookie("token",token);
    res.send("COOKIE x JWT")
    let data = jwt.verify(req.cookies.token,"secret_key");                      //logging data of token
    console.log(data);

});    

app.listen(3000);