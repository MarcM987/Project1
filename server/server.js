const path = require('path');
const express = require("express");
const app = express();
const publicPath = path.join(__dirname, '..', 'project1/public');
const port = process.env.PORT || 3001;

app.use(express.static(publicPath));

app.get("*", function(request, response){
    response.sendFile(path.join(publicPath, 'index.html'));

});

app.listen(port, function(){
    console.log("Sever is Listening.");
});