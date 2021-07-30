const express = require("express");
const app = express();

//跨域解决
app.use(require("cors")())

//表示要express识别客户端提交过来的json
app.use(express.json())

//托管静态文件
app.use('/uploads',express.static(__dirname + '/uploads'))

require("./routes/web")(app);
require("./plugins/db")(app);


app.listen(3000,()=>{
    console.log('http://localhost:3000')
})
