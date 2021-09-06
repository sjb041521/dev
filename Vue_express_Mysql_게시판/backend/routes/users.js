var express = require('express');
var router = express.Router();
const bcrypt = require('bcryptjs');
var session = require('express-session');
var MySQLStore = require('express-mysql-session')(session);
// const jwt =require('jsonwebtoken');
// const uuidv4 = require('uuid/v4');

// const dao=require('./dao');
//추가한 부분
var mysql = require('mysql');
// Connection 객체 생성 
var connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',   
  password: '1234',
  database: 'pwa_crud'  
});  
// Connect
connection.connect(function (err) {   
  if (err) {     
    console.error('mysql connection error');     
    console.error(err);     
    throw err;   
  }
  console.log("db users 연결"); 
});

// DB 로그인 세션 설정
var options = {
  host: '127.0.0.1',
  port: '3306',
  user: 'root',
  password: '1234',
  database: 'pwa_crud'
}
// db 세션 설정
var sessionStore = new MySQLStore(options);

// 리스트
router.get('/',  function (req, res) {
  connection.query('SELECT * FROM members_write', function (err, rows) {
    if (err) throw err;
    res.send(rows);
    // console.log(rows[0].user_id);
    // console.log(rows); // 데이터 확인 횽
  });
});

// 상세 페이지
router.get('/list/:id',function (req, res) {
  var id = req.params.id;
  sql = " SELECT * FROM members_write WHERE no = ?";
  connection.query(sql,id, function (err, rows) {
    if (err) {throw err;}
    res.send(rows);
    // console.log(id);
    // console.log(req);
  });
});

// 상세 페이지 삭제
router.get('/remove/:id', function (req, res) {
  var auth_sql = 'SELECT user_id FROM members_write WHERE no = ?';
  var id = req.params.id;
  connection.query(auth_sql,id, function(err, rows){
    if (rows[0].user_id === req.session.user_id && rows[0].no === id){
      var delete_sql = 'DELETE  FROM members_write WHERE no = ?';
      var id = req.params.id;
      connection.query(delete_sql,id, function (err, rows2) {
        if (err) {throw err;}
      });      
        res.json({
          success: true,
          message: '게시물이 삭제되었습니다.'
        })
    }
    else {
      res.json({
        success: false,
        message: '권한이 없습니다.'
      });
    }
  });
});    


//  회원가입
router.post('/signUp', function (req, res) {
  const user = {
    'user_id': req.body.user.user_id,
    'password': req.body.user.password,
    'sign_date': req.body.user.sign_date,
  };
  console.log(user);
  connection.query('SELECT user_id FROM members_list WHERE user_id = "' + user.user_id + '"', function (err, row) {
    if (row[0] == undefined || row[0] == null){ //  동일한 아이디가 없을경우,
      const salt = bcrypt.genSaltSync();
      const encryptedPassword = bcrypt.hashSync(user.password, salt);
      connection.query('INSERT INTO members_list (user_id,password,sign_date) VALUES ("' + user.user_id + '","' + encryptedPassword + '","' + user.sign_date + '")', user, function (err, row2) {
        if (err) { throw err;}
      });
      res.json({
        success: true,
        message: '축하합니다 회원 가입이 되었습니다.'
      })
    }
    else {
      res.json({
        success: false,
        message: '동일한 다른 아이디가 있습니다.'
      })
    }
  });
});

//  글 작성
router.post('/write', function (req, res) {
  const user = {
    'user_id': req.session.user_id,
    'name': req.body.user.name ,
    'title': req.body.user.title,
    'content': req.body.user.content,
    'date': req.body.user.date,
  };
  console.log(user);
  connection.query('SELECT user_id FROM members_list WHERE user_id = "' + user.user_id + '"', function (err, row) {
    if (row[0] !== undefined){ //  동일한 아이디가 없을경우,
      connection.query('INSERT INTO members_write (user_id,name,title,content,date) VALUES ("' + user.user_id + '","' + user.name  + '","' + user.title  + '","' + user.content  + '","' + user.date + '")', user, function (err, row2) {
        if (err) { throw err;}
      });
      res.json({
        success: true,
        message: '작성 완료!'
      })
      
    }
    else {
      res.json({
        success: false,
        message: '로그인을 하세요.'
      })
    }
  });
});

//  로그인 세션 유지
router.get('/login',function(req,res){
  console.log(req.session.user_id);
    res.send(req.session.user_id);
  });
// 로그인 값 입력 받기
router.post('/login', async function(req, res, next) {
  // 로그인할 아이디 패스워드
  const user = {
    'user_id': req.body.user.user_id,
    'password': req.body.user.password
  };
  connection.query('SELECT user_id, password FROM members_list WHERE user_id = "' + user.user_id + '"', function (err, row) {
    if (err) {
      res.json({ // 매칭되는 아이디 없을 경우
        success: false,
        message: '해당하는 아이디가 없습니다.'
      })
    }
    if (row[0] !== undefined && row[0].user_id === user.user_id) {
      bcrypt.compare(user.password, row[0].password, function (err, res2) {
        if (res2) {
          req.session.user_id = row[0].user_id;
            res.json({ // 로그인 성공 
              success: true,
              message: req.session.user_id+'님 로그인 되었습니다.',
              login_session: req.session.user_id,
            })
        }
        else {
          res.json({ // 매칭되는 아이디는 있으나, 비밀번호가 틀린 경우            success: false,
            message: 'Login failed please check your id or password!'
          })
        }
      })
    }
  })
});
//  계정 로그아웃
router.get('/logout',function(req,res){
  // req.session.destroy();
  // res.clearCookie('connect.sid');
  delete req.session.user_id;
  res.send(req.session.user_id);
  });

module.exports = router;
