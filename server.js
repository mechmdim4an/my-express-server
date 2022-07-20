//jshint esversion:6

// express module
const express = require ('express');
const app = express();

//Get callback function for Hello world '/' home page 

app.get("/", function (req, res) {
    res.send("Hello world");
    
});

//Get callback function for contact details '/contact' contact  page 
app.get("/contact", function (req, res) {
    res.send("Contact me at: mechmdimran@gmail.com")    
});

//Get callback function for about me '/about' about page 

app.get("/about", function(req, res){
    res.send("I am Mohammed Imran, I love to prayer and code.")

})

// creating server port 3000
app.listen(3000, function () {
    console.log("Server started on port 3000");
});