const express = require("express");
const app = express();


app.get("/", function(request, response){
    response.send("Hello World!");

});
app.listen(3001, function(){
    console.log("Sever is Listening.");
});