const koa = require('koa');
const Router = require('koa-router');
const fs = require('fs');
const path = require("path");
const app = new koa();
const cors = require('@koa/cors');
const cp = require("child_process");

const bodyParser = require('koa-bodyparser');

const router = new Router()
const port = 3000;
let isRunning = false;
app.use(cors());

router.get('/', ctx => {
    ctx.body = 'hello world'
})

router.post('/run', ctx => {
    console.log('run')
    const { content } = ctx.request.body;
    const data = "/* eslint-disable */\n" + content
    fs.writeFileSync(path.resolve('src', 'components', 'Demo.vue'), data)

    if(isRunning){
        ctx.body = '已经渲染完成/上次渲染未结束，请不要多次点击'
        return
    }
    cmd = cp.spawn("npm", ["run", "serve", "--", "--port", "3001"]);

    cmd.stdout.on("data", (data) => {
        console.log(`stdout: ${data}`);
        if (!isRunning && data.includes("http://localhost")) {
            isRunning = true;
            ctx.res.body = "Started!";
        }
    });

    cmd.stderr.on("data", (data) => {
        console.error(`stderr: ${data}`);
    });

    cmd.on("error", (err) => {
        console.log(`child process exited with err ${err}`);
    });

    cmd.on("close", (code) => {
        console.log(`child process exited with code ${code}`);
    });
})
router.post('/update', ctx => {
    const { content } = ctx.request.body;
    const data = "/* eslint-disable */\n" + content
    fs.writeFileSync(path.resolve('src', 'components', 'Demo.vue'), data)
    ctx.body = 'update是否成功'
    console.log(data)
})
app.use(bodyParser());

app.use(router.routes());

app.listen(port, () => {
    console.log('启动成功')
    console.log('http://localhost:3000')
});
