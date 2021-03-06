const express = require("express")

const usersRoute = require("./routes/usersRoutes")

const path = require("path")

  
const app = express()
//middleware
app.use(express.json());
app.use(usersRoute)

// Home route
app.get("/", (req, res)=>{
   res.sendFile(path.join(__dirname + "/pages/index.html"))
})

app.get("/*", (req, res)=>{
    res.status(400).sendFile(path.join(__dirname + "/pages/404.html"))
})

const PORT = 4000;
app.listen(PORT, ()=>{
 console.log("SERVER IS UP")   
})