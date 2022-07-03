require('dotenv').config()

let express = require('express');
let app = express();

console.log("Hello World");




var response = "Hello json"

if (process.env.MESSAGE_STYLE === "uppercase"){
  response = response.toUpperCase();
}

app.get("/json", (req, res) => {
  res.json({
    "message": response
    })
  });






























 module.exports = app;
