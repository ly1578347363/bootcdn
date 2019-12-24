//注意:需要引入 express body-parser
const express = require('express'); //引入第三方express框架
const app = express(); //创建web服务
const path = require('path'); //路径管理模块
app.use(express.static(path.join(__dirname, 'public'))); //静态资源管理
const bodyParser = require('body-parser'); //处理post接收值的第三模块
app.use(bodyParser.urlencoded({ extended: false })); //接收post传值中间件
app.use(bodyParser.json()); //接收json传真中间件
app.listen(80, () => { //监听端口
    console.log('http://127.0.0.1');
});