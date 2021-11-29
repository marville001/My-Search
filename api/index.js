require("dotenv").config();
const express = require("express");
const save = require("./firebase/setData");

const app = express();
app.use(express.json())

app.get("/", (req, res) => {
  res.send("Welcome to links api");
});

app.post("/save-link", (req, res) => {
    save.saveData(req.body, (err, data)=>{
        if(err) return console.log(err)
        res.send(data)
    })
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`App running on port ${PORT}`));
