require('dotenv').config()

let express = require('express');
let app = express();

console.log("Hello World");


app.get("/json", (req, res) => {
    var response = {"message":"Hello json"}
    if (process.env.MESSAGE_STYLE === "uppercase"){
        response.message = response.message.toUpperCase();
        }
    res.json(response)
    });






























 module.exports = app;
