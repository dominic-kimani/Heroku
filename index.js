const express = require("express")
const app=express()

app.get("/",function(res,req){
req.send("Working!!!!")
})
app.listen(process.env.port||5000, (res, req) => {
console.log(`Server is running`)
})

//testing
