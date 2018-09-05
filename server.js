const express = require('express');
const path = require('path');
const router = require('./server/routes');

const app = express();

app.use(express.static(path.join(__dirname, './client/dist/client')));

router(app);

app.all("*", (req, res)=>res.sendFile(path.join(__dirname, './client/dist/client/index.html')));

app.listen(8000, function(req, res){
    console.log("We working")
})