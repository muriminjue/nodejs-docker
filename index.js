const express = require("express");

const app = express();

const PORT = process.env.PORT || 4000;

app.get("/",(req,res)=>{
    res.send("Runing on docker")
})

app.listen(PORT, (error) => {
  if (error) console.log("Could not start due to " + error);
  console.log("App started on port: " + PORT);
});
