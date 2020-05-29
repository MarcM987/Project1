const path = require('path');
const express = require("express");
const app = express();
const publicPath = path.join(__dirname, '/build');
const port = process.env.PORT || 3001;

app.use(express.static(publicPath));

app.get("*", function(request, response){
    response.sendFile(path.join(publicPath, 'index.html'));
    // response.send("Hello World");

});

app.listen(port, function(){
    console.log("Sever is Listening.");
});