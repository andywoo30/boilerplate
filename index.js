// 먼저 npm init, indexedDB.js 만들고, npm install express 하고, 아래 코드 붙여넣고, 스크립트에 start 추가, 몽고DB 추가,

const express = require('express');
const app = express();
const port = 5000;
const bodyParser = require('body-parser'); 

const config = require('./config/key.js')

const {user} = require ('./model/user.js'); //유저모델 가져오기

app.use(bodyParser.urlencoded({extended: true}));//바이파서 옵션 주기 application/x-www-form-urlencoded 분석해서 가져오고
app.use(bodyParser.json());//바디파서 옵션 주기 application/json 분석해서 가져오기


const mongoose = require('mongoose'); //몽고DB 연결하기
mongoose.connect(config.mongoURI, {
    useNewUrlParser: true, useUnifiedTopology: true
}).then(()=>console.log("MongoDB Connected"))
  .catch(err => console.log(err));




app.get('/', (req, res) => {
  res.send('안녕하세요!');
})

app.post('/register', (req, res) => {
//회원가입에서 필요한 정보들을 client에서 넣어주면 그것을 데이버테이스에 넣어준다. (회원가입위한 라우트)
 const user = new user(req.body);

 user.save((err, userInfo) => {
   if(err) return res.json({sucess: false, err})
   return res.status(200).json({
     success: true
   });
 });
});



app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});