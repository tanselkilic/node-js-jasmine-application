var express = require("express");
var app = express();

app.get("/", function (req, resp) {
    resp.send("<h2>Using Jasmine to Test Node.js Applications</h2>"); 
});

app.listen(8182);
