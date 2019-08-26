const express = require("express");
const bodyparser = require("body-parser");

const app = express();
//You need to use bodyParser() if you want the form data to be available in req.body.
app.use(bodyparser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use("/login", express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.send("Hello, my application!");
});

app.post("/login", (req, res) => {
  console.log(req.body);
  // do some database process
  res.redirect("/");
});

app.listen(3000, () => console.log("server is running at port 3000.."));
