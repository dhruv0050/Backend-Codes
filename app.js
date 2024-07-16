const express = require('express')
const app = express()
const usermodel = require('./usermodel')  //requiring the usermode.js file for CRUD operations

app.get('/', (req , res) =>{
    res.send("Hey MongoDB")
})

// app.get('/create', async (req , res) =>{                 //Creating user
//     let createdUser = await usermodel.create({
//         name: "Dhruv",
//         email: "dhruvsh5467@gmail.com",
//         username: "dh.ruv05"
//     })
//     res.send(createdUser)
// })

app.get('/create', async (req , res) =>{ 
    let createdUser = await usermodel.create({
        name: "Dhruvika",
        email: "dhruvika5467@gmail.com",
        username: "dh.ruvika"
    })
    res.send(createdUser)
})

app.get('/update', async (req , res)=> {
    let updateuser= await usermodel.findOneAndUpdate({name:"Dhruvika"},{name:"Dhrushika"},{new:true})         //updating user
    res.send(updateuser)
})

app.get('/read', async (req , res)=> {
    let user= await usermodel.find();         //Reading user
    res.send(user)
})

app.get('/delete', async (req , res)=> {
    let user= await usermodel.findOneAndDelete({name: "Dhrushika"});         //Deleting user
    res.send(user)
})
app.get('/read', async (req , res)=> {
    let user= await usermodel.find();         //Reading user
    res.send(user)
})


app.listen(3000);