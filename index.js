// 먼저 npm init, indexedDB.js 만들고, npm install express 하고, 아래 코드 붙여넣고, 스크립트에 start 추가, 몽고DB 추가,

const express = require('express');
const app = express();
const port = 5000;


const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://andywoo30:woohyun-30@boilerplate.adtzc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true
}).then(()=>console.log("MongoDB Connected"))
  .catch(err => console.log(err));



app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});