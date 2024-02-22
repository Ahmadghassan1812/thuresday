const express = require('express');
const app= express();
const cors = require("cors");


app.use(cors());
app.use(express.json());


app.get('/', function(req,res)
{
    res.send("Start my Server")
})
app.get('/getData',function(req,res)
{
    var newUser={name:"Ahmad", age:"20", field:"CE"}
    res.json(newUser)
})
app.get('/getPrice',function(req,res){
    var newUser1={price1:"10$",price2:"30$",price3:"50$",price4:"75$"}
    res.json(newUser1)
})
app.listen(8000, () => {
    console.log(`Server is running on port 8000.`);
  });
  