const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const fs = require("fs");
const cors = require("cors");
// const { postgraphile, makePluginHook } = require("postgraphile");
const logger = require("morgan");
const  cookieParser = require('cookie-parser')
const  dotenv = require("dotenv");
//Requring Routes
const routers = require("./routes")
const postgraphileRouter = require("./middlewares/postgraphile");

const port = process.env.PORT || "3001";

//Creating Express Instance
const app = express();

//Configuring middleware
app.use(cors());
app.use(logger("dev"));
app.use(express.json());
// app.use(upload());
app.use(bodyParser.urlencoded({limit: '50mb',    parameterLimit: 100000
, extended: true}));
app.use(bodyParser.json({limit: '50mb'}));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


//Index route
app.get("/", (req, res) => {
    res.status(200).send({ message: "Server is up & running on " + port });
});

//Routes
app.use('/api/v1/',routers);
app.use("/public", express.static("public"));
//Postgrahile middleware setup
app.use(postgraphileRouter);

app.listen(port, e => {
    if (e) {
        console.log("Unable to start server");
        console.log(e);
        return; 
    }
    console.log("Server up on : " + port);
});