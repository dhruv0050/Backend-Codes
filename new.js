const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended : true}));  //to make the send data readable to the server side these two are used


app.get('/', function (req, res) {  //app.get(route , requestHandler)
  res.send('Hello My Roooute World');
});

app.get('/profile', function (req, res) {  //app.get(route , requestHandler)
  res.send('Hello My Profile World');
});

app.get('/about', function (req, res) {  //app.get(route , requestHandler)
  res.send('Hello My About World');
});

app.listen(3000);