//PART 1 IMPORTING

const express = require("express");
const app = express();

//PART 2 ROUTING

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.get("/about", (req, res) => {
  res.send("<h1>This is about page.</h1>");
});

//OTHER OPTIONS:
// 1.res.download()->"IT WILL AUTOMATICALLY PROMPT TO DOWNLOAD ANYTHING LIKE PDF,WORD ETC"
// 2. res.end()->"ITS END THE RESPONSE THAT WHATEVER THE SERVER IS RESPONDING , IT CAN ALSO ACCEPT PARAMETER"
// 3. res.json()
// 4. res.send()
// 5. res.render()-> "RENDER ALLOWS YOU TO RENDER ENTIRE WEBPAGE WHICH IS JADE,PUG,EJX"
// 6. res.redirect() -> "REDIRECTING TO SPECIFIC PAGE FOR EXAMPLE YOU ARE IN LOGIN PAGE AND YOU WANT TO GO BACK TO INDEX PAGE THEN YOU CAN REDIRECT USING THIS METHOD."
//7. res.status() -> 200 - ok
//                   403 - Forbidden
//                   404 - File not found
//                   500 - Internal server error
app.get("/about-us", (req, res) => {
  //res.status(200).json({ user: "faisal", balance: "2000", id: "123nht56" });
  res.status(500).json({ error: "something went wrong" });
});

//ASSIGNMENT1: CREATE  ROUTE FOR CONTACT US AND SERVICES
//AND IN SERVICES CREATE A SIMPLE UNODER LIST AND THROW IT WITH THREE OR FOUR SERVICES

app.get("/contact-us", (req, res) => {
  res.send("<h1>This is contact-us Page</h1>");
});

app.get("/services", (req, res) => {
  res.send(
    "<ul><li>Website Design</li><li>Logo</li><li>Coffee</li><li> Tea</li><li>Milk</li></ul>"
  );
});

// CREATING ROUTE USING POST METHOD

app.post("/login", (req, res) => {
  res.send("login successfull");
});

//*NOTE -> IT WON'T DISPLAY ON BROWSER BECAUSE POST METHOD NEED FRONT END FORM IN WHICH "POST" METHOD SHOULD MENTION. BROWSER BY DEFAULT SET WITH "GET" METHOD.SO TO TEST POST METHOD RUNNING PERFECTLY OR NOT, WE USE THE HELP OF POSTMAN SOFTWARE.

//ABOUT POSTMAN : POSTMAN IS A SOFTWARE CREATED USING ELECTRON.JS. IT USE TO TEST THE BEHAVIOR OF SERVER SPECIALLY IN CASE OF "POST","DELETE" AND ETC.

//ASSIGNMENT 2: CREATE A DELETE ROUTE AND TEST USING POSTMAN

app.delete("/tour", (req, res) => {
  res.send("You deleted this page");
});

app.get("/user/:id", (req, res) => {
  res.send(req.params);
});
//NOW ROUTING WITH IDS ;)
app.get("/flight/:from-:to", (req, res) => {
  res.send(req.params);
});

//PART 3 LISTENING

app.listen(3000, () => console.log("server is running at 3000 port..."));
