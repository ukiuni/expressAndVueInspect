const express = require("express");
const bodyParser = require('body-parser');//ここ
var Sequelize = require('sequelize');
var sequelize = new Sequelize('sample', '', '', { dialect: 'sqlite', storage: './sample.db' });

var Talk = sequelize.define('Talk', {
    message: Sequelize.STRING
});

const app = express()
app.use(bodyParser.json())//koko
app.use(express.static('public'));
app.get("/api/account", (req, res) => {
    res.json({ "name": "My Name is hoge" });
})
var serverTalks = ["サーバのトーク"]
app.get("/api/talks", async (req, res) => {
    //res.json(serverTalks);
    res.json(await Talk.findAll());

})
app.post("/api/talks", async (req, res) => {
    var talk = req.body.talk;
    //serverTalks.push(talk);
    var talkObject = Talk.build({ message: talk })
    await talkObject.save();
    res.send();
})

app.get("/api/work", (req, res) => {
    res.send("gege");
})
sequelize
    .sync({ force: false })
    .then(function () {
        app.listen(3004);
    }).catch((e) => {
        console.log(e);
    });