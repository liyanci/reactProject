'use strict'
const http = require('http');
const request = require('request');
const url = require('url');
const express = require('express');
const proxy = require('http-proxy-middleware');

let app = express();

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");

    // 跨域请求CORS中的预请求
    if(req.method=="OPTIONS") {
      res.send(200);/*让options请求快速返回*/
    } else{
      next();
    }
});
//http://m.tyigui.com/?page=3&order_by=&ajax=1&_=1544231143220

app.use('/api',proxy({
    "target": "http://m.tyigui.com",
    "changeOrigin": true,
    "pathRewrite": {
      "^/api" : "/"
    }
}))


app.listen(4004,function(){
    console.log('Server start')
})