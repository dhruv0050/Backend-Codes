const express= require('express');
const app= express();
const path= require('path')
app.use(express.json());
app.use(express.urlencoded({extended : true}));   //Setting up parsers for form

app.use(express.static(path.join(__dirname, 'public')));  //Setting up static files

app.set('view engine', 'ejs')  //Setting up ejs as a view engine

app.get("/" , function(req , res ){   //Setting up a ROUTE
    res.render("index")
})
app.get("/profile/:username" , function(req , res ){   //Setting up a Dynamic ROUTE
    res.send(`Welcome lord ,${req.params.username}`)
})

app.listen(3000);
