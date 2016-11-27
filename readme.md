# TodoMVC App Template

> Template used for creating [TodoMVC](http://todomvc.com) apps


## 准备工作

修改 `package.json` 文件为如下内容：

```json
{
  "private": true,
  "dependencies": {
    "todomvc-app-css": "^2.0.0"
  },
  "scripts": {
    "prestart": "npm install",
    "start": "hs -o",
    "predev": "npm install",
    "dev": "hs -o"
  },
  "devDependencies": {
    "http-server": "^0.9.0"
  }
}
```

启动开发模式：

```bash
$ npm run dev
```

执行完上面的命令之后，会自动执行 `npm install` 命令安装依赖项，
同时启动一个服务器并自动在浏览器中打开 index.html。


## Develop

```bash
$ npm run dev
```
