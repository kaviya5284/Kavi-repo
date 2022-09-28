const express = require('express')
const app = express()
app.listen(4000)

const user =[];

app.get("/g",(res,req)=>{
    req.send(user)})

app.post("/p",(req,res)=>{
        console.log(req.body);
        user.push(req.body);
        res.send("added")

})

app.put("/put",(res,req)=>{req.send(user)})
