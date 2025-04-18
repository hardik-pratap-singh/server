//Common JS Module // Ecma JS 
const express = require("express");
const app = express();
const data = require("./data.json") ;

const http = require("http")


app.get("/",(req, res) => {
    // console.log(data) ; 
    res.json(data);
})

app.get("/1" ,)

app.post("/about" , (req , res) => {
    const data = req.body ; 
    //database scripts 


    //db end

    res.json({success : true}) ; 
})


app.listen(7000  , ()=> {
    console.log("Server is running @ 8080")
})




