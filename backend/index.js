let express = require("express");
let mongoose = require("mongoose");
let cors = require("cors");
let bodyParser = require("body-parser");

// Express Route
const customerroutes = require("./routes/customerroutes");
 

// Connecting mongoDB Database 
mongoose.connect("mongodb://127.0.0.1:27017/Event_management")
    .then((x) => {
        console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`,
    );
    }).catch((err) => {
        console.error("Error connecting to mongo", err.reason);
    });

const app = express();
app.use(bodyParser.json());
app.use(
        bodyParser.urlencoded({ extended: true,
    }),
);
app.use(cors());
app.use("/customers", customerroutes);

// PORT
const port = 4000;
app.listen(port, () => {
console.log("Connected to port " + port);
});

