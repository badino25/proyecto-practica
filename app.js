const express = require("express");
const app = express();
const path = require("path");
const port = 5000

app.listen(port,() => {
    console.log(`Servidor levantado en https://localhost:${port}.com`)});
    
app.get("/", (req, res) => {
    res.sendfile(path.join(__dirname,`/views/por.html`))});


    app.use(express.static(__dirname + '/public'));














    // app.get("/", (req, res) => {
    //     res.sendFile(path.join(__dirname, '/views/home.html'))
    // })