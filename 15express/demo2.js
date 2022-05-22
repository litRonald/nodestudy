// 路由
// 我们已经了解了 HTTP 请求的基本应用，而路由决定了由谁(指定脚本)去响应客户端请求。

// 在HTTP请求中，我们可以通过路由提取出请求的URL以及GET/POST参数。

// 接下来我们扩展 Hello World，添加一些功能来处理更多类型的 HTTP 请求。

var express = require('express');
var app = express();

const cors = require('cors')

  app.use(cors())
//  主页输出 "Hello World"
app.get('/', (req, res) => {
    console.log('主页GET请求')
    res.send('Hello GET')
}) 

// post qingqiu 

app.post('/', (req, res)=> {
    console.log('主页 post 请求 -----------------')
    res.send('Hello post')
})

app.get('/del_user', (req, res) => {
    res.send('删除页面')
    console.log('相应 DELETE 请求')
})

// list_user 
app.get('/list_user', (req, res) => {
    console.log("/list_user GET 请求");
    res.send('用户列表')
})



// 对页面 abcd, abxcd, ab123cd, 等响应 GET 请求
app.get('/ab*cd', function(req, res) {   
    console.log("/ab*cd GET 请求");
    res.send('正则匹配');
})


let server = app.listen(8082, ()=> {
    let host = server.address().address;
    let port = server.address().port

    console.log("应用实例，访问地址为 http://%s:%s", host, port)
})


