# template-exercise
要求：
渲染：
```
<div class="newslist">
    <div class="img" v-if="info.showImage"><img src="{{image}}"/></div>
    <div class="date" v-if="info.showDate">{{info.name}}</div>
    <div class="img">{{info.name}}</div>
</div>
```
## 说明：
1. 更改了：`parseNodeToDom(root, data)`方法
2. 还有关于`v-if`中的`-`不能识别，我replace为`_`，之后再识别
3. `parseNodeToDom(root, data)`中的`stack`识别逆序的问题，我改成队列：名字未改，逻辑改了
## render作业查看
1. `npm i`
2. 进入目录：`/115-GeekPractice/week2/template-exercise/template-exercise`
    使用命令：`npm run serve`
3. 进入：`http://localhost:8080/#/tmp`即可查看
4. 代码文件在：`115-GeekPractice/week2/template-exercise/template-exercise/src/views/myTmp.vue`下
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
