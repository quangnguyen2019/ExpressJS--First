let express = require("express");
let app = express();

let port = 3000;

app.get("/", (req, res) => {
    res.send("<p> Hello everyone </p>");
});

app.listen(port, () => {
    console.log("Server listening on port " + port);
});