const Koa = require('koa')
const app = new Koa()

// 窗口 配置文件
const conf = require('./config')

app.use(ctx => {
    ctx.body = 'hello Hmonkey'
})

app.listen(conf.server.PORT, () => {
    console.log('Server run at http://localhost:3000')
})