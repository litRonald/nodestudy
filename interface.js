var express = require('express');
var mysql  = require('mysql');
 
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'test',
    connectTimeout:3600000
  });
 
  connection.connect();
 
  var app = express();
  const cors = require('cors')

    app.use(cors())
  var server = app.listen(8081, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
})
 
app.get('/list', function (req, res) {
  res.header("Access-Control-Allow-Origin", "*");
    connection.query('SELECT*from info', function (error, results, fields) {
        if (error) throw error;
        res.send(results);
      });
})
 
 
app.get('/add', function (req, res) {
    let sqlstr="insert into info(name,amount) values(?,?)";
    let sqlparam=[req.query.name,req.query.amount];
    connection.query(sqlstr,sqlparam, function (error, results, fields) {
        if (error) throw error;
        res.send(results);
      });
})
 
app.get('/update', function (req, res) {
    let sqlstr="update info set name=?,amount=? where id=?";
    let sqlparam=[req.query.name,req.query.amount,req.query.id];
    connection.query(sqlstr,sqlparam, function (error, results, fields) {
        if (error) throw error;
        res.send(results);
      });
})
 
app.get('/del', function (req, res) {
    let sqlstr="delete from info where id=?";
    let sqlparam=[req.query.id];
    connection.query(sqlstr,sqlparam, function (error, results, fields) {
        if (error) throw error;
        res.send(results);
      });
})