const express = require("express");
const app = express()
app.use(express.static('public'));
app.get("/api/account", (req, res) => {
    res.json({"name":"My Name is hoge"});
})
app.get("/api/work", (req, res) => {
    res.send("gege");
})
app.listen(3004); 