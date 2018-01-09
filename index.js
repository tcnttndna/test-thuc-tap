var express = require("express");
var app = express();
var server = require("http").Server(app);
var morgan = require("morgan");
var helmet = require("helmet");
var ejs = require("ejs");
var bodyParser = require("body-parser");
var path = require("path");
var port = process.env.PORT || 3000;


app.use(morgan("common"));
app.use(helmet());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.set("view engine","ejs");
app.set("views","./views");

server.listen(port,()=>{
    console.log("connected port: " + port);
});


// call module
var router = require("./router/router");
router.router(app);
var socket = require("./my_module/socket/socket.js");
socket.connectSocket(server);