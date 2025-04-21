//Common JS Module (const/ let/ var) - nodejs // Ecma JS (import/export) - reactjs
const express = require("express");
const app = express();
const user = require("./data.json") ;
// const db = asgasla dsfjk asd 
// const users = require("./users.json")
// "../../"
// "./"
// ".././"

// const http = require("http") - node 

app.use(express.json()) ; 



app.get("/user",(req, res) => {
    // console.log(data) ; 
    res.json(user);
})



// /user/id/45

// /user/hardik
app.get('/user/id' , (req , res) => {
    res.send("User with Id") ; 
})

app.get("/user" , (req , res) => {
    res.send("Get request fulfilled !!")
})

app.get("/user/:id" ,(req , res) => {
    const params = req.params ; 
    const userId = params.id ; 

    //json - user - []
    // id = userId 

    const user1 = user.find(u => (u.id == userId)) ; 

    // res.send(params.id) ; 
    res.send(user1); 
})

// POST , PUT , PATCH , DELETE 

// userName , emailId , password 
app.post("/user" , (req , res) => {
    const data = req.body ; 
    console.log(data);  


    res.send("POST request !!") ; 
})



app.get("/user/id/45" , (req , res) => {
    res.send("user with id 45") ; 
})


// app.get("user/:id", (req , res) => {
//     res.json("User Not Found") ; 

// })

// /users 
app.get("/users" , (req , res) => {
    res.json(users) ; 
})


// app.get("/1" ,)

// app.post("/about" , (req , res) => {
//     const data = req.body ; 
//     //database scripts 


//     //db end

//     res.json({success : true}) ; 
// })


app.listen(7000  , ()=> {
    console.log("Server is running @ 7000")
})




