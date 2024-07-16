const express = require('express');
const app = express();

app.use(function(req, res, next){
    console.log('Middleware executed');  //creating middleware
    next();
})
app.get('/', function (req, res) {  //app.get(route , requestHandler)
  res.send('Hello My Roooute World');
});

app.get('/profile', function (req, res) {  //app.get(route , requestHandler)
  res.send('Hello My Profile World');
});

app.get('/about', function (req, res) {  //app.get(route , requestHandler)
  res.send('Hello My About World');
});

app.get('/more', function (req, res, next) {
    return next(new Error("Something went wrong"))  //app.get(route , requestHandler)
});
app.use((err,req, res, next) =>{         //error handler created for /more route
    console.error(err.stack)
    res.status(500).send("Wronggggg")
})

app.listen(3000);