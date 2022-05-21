const express = require("express")
const app=express()

app.get("/get",function(res,req){
req.send("Working!!!!")
})
app.listen(process.env.port||5000)