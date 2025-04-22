//Common JS Module (const/ let/ var) - nodejs // Ecma JS (import/export) - reactjs
const express = require("express");
const app = express();
const user = require("./data.json");
// const db = asgasla dsfjk asd 
// const users = require("./users.json")
// "../../"
// "./"
// ".././"

// const mongoose = require('mongoose') ; 

// PUT 
// {
//   "id": 101,
//   "name": "Clementina Du"
  
// },

// PATCH
// {
//   "id": 101,
//   "name": "Clementina Du", 
//   "username": "Mon",
//   "email": "Rey.Padberg@karina.biz"
// },


// const http = require("http") - node 

app.use(express.json());

//bodyparser


// app.
//     get
//     ("/user",
//         (req, res) => {
//             // console.log(data) ; 
//             res.json(user);
//         })


// /user/id/45

// /user/hardik
app.get('/user/id', (req, res) => {
    res.send("User with Id");
})

app.get("/user", (req, res) => {

    res.send(user) ; 
    // res.send("Get request fulfilled !!")
})

app.get("/user/300", (req, res) => {
    res.send("user 300");
})

app.get("/user/400", (req, res) => {
    res.send("user 400");
})

app.get("/user/500", (req, res) => {
    res.send("user 500");
})


//dyanmic routing

// app.get("/users/:userId/:locationId")

app.get('/rohan/:class/:rollno' , (req , res) => {
    const class1 = req.params.class ;
    const rollno = req.params.rollno ; 

    res.send({class1 , rollno}) ; 
})

app.get("/user/:userId", (req, res) => {

    // req = {
    //     params: {
    //         userId: {

    //         }
    //     }
    // }
    const userId = req.params.userId;
    // const userId = params.id ; 
    // console.log(userId) ; 
    //json - user - []
    // id = userId 

    const user1 = user.find(u => (u.id == userId));

    // res.send(params.id) ; 
    res.send(user1);
})

// GET , POST , PUT , PATCH , DELETE 

// userName , emailId , password 
app.post("/user", (req, res) => {

    const data = req.body;
    console.log(req);

    // req : {
    //     body : {
    //         "userId" : 
    //         "password" : 
    //     }
    //     params : {
    //         "userId" : "" , 
    //         "locationId" : ""
    //     }
    // }
    res.send("POST request !!");
})


// req = {

// }

app.get("/user/id/45", (req, res) => {
    res.send("user with id 45");
})


// app.get("user/:id", (req , res) => {
//     res.json("User Not Found") ; 

// })

// /users 
app.get("/users", (req, res) => {
    res.json(users);
})


// app.get("/1" ,)

// app.post("/about" , (req , res) => {
//     const data = req.body ; 
//     //database scripts 


//     //db end

//     res.json({success : true}) ; 
// })


//PATCH request (update document)

// URL : http://localhost:7000/user/101, PATCH
app.patch("/user/:id" , (req , res) => {
    const id = req.params.id ; 

    const updates = req.body ; //updated data {name : "Rohan"}

    const doc = user.find(u => u.id = id) ;
    // console.log("doc")
    // console.log(doc) ; 

    // db.save() ; 
    Object.assign(doc , updates) ; 
    //function // map, filter, find // javascript 

    // console.log(doc) ; 
    res.send(doc) 

})


//DELETE request  - deletes some resource from the db/json
app.delete("/user/:id" , (req , res) => {
    //splice method in javascript 
    const idToDelete = parseInt(req.params.id) ; 
    // const docToDelete = user.find(u => u.id = idToDelete) ;
    console.log("idToDelete " , idToDelete) ; 

    const idxToDelete = user.findIndex(u => u.id == idToDelete); 

    console.log("idxToDelete" , idxToDelete) ; 
    const updatedData = user.splice(idxToDelete , 2) ; 

    // const updatedUser = user.splice()


    res.send(updatedData); 
})



app.listen(7000, () => {
    console.log("Server is running @ 7000")
})




