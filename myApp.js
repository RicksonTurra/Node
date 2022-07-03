require('dotenv').config()

let express = require('express');
let app = express();

console.log("Hello World");




var response = "Hello json"


app.get("/json", (req, res) => {
    if (process.env.MESSAGE_STYLE === "uppercase"){
        response = response.toUpperCase();
        }
    res.json({
        "message": response
        })
    });






























 module.exports = app;
