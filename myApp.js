require('dotenv').config()

let express = require('express');
let app = express();

console.log("Hello World");

app.get("/:word/echo", (req, res) => {
  const param1 = req.params.word;
  
  res.json({
    echo: param1
  });
}
)



app.get(
    "/now",
    (req, res, next) => {
      // adding a new property to req object
      // in the middleware function
      req.time = new Date().toString();
      next();
    },
    (req, res) => {
      // accessing the newly added property
      // in the main function
      res.send(
        {
            time:req.time
        }
        )
    }
  );
  
/*app.use(function middleware(req, res, next) {
    // Do something
    var string = req.method + " " + req.path + " - " + req.ip;
    // Call the next function in line:
    console.log(string)
    next();
  });*/

  
app.get("/json", (req, res) => {
    var response = {"message":"Hello json"}
    if (process.env.MESSAGE_STYLE === "uppercase"){
        response.message = response.message.toUpperCase();
        }
    res.json(response)
});

































 module.exports = app;
