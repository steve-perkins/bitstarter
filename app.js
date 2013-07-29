var express = require("express"),
    http = require("http"),
    path = require("path");

var app = express();
app.set("port", process.env.PORT || 8080);
app.use(express.favicon());
app.use(express.static(path.join(__dirname, "public")));

http.createServer(app).listen(app.get("port"), function(){
    console.log("Express server listening on port " + app.get("port"));
});
