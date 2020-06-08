var http = require('http');
var fs = require('fs');


http.createServer(function(req, res) {
    console.log(req.url);
    if (req.url === '/') {
        //请求 index.html 返回请求状态为200
        console.log('page');
        var data = fs.readFileSync('./index.html').toString();//读取文件内容并转换为字符串
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        res.end(data);
    } else if(req.url === '/ajax.js') {
        console.log('page');
        var data = fs.readFileSync('./ajax.js').toString();//读取文件内容并转换为字符串
        res.writeHead(200, {'Content-Type': 'text/javasctipt; charset=utf-8'});
        res.end(data);
    } else if(req.url === '/req') {
        console.log('ajax');
        res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});
        res.end(`{"nodeType": "p", "nodeValue": "这个节点是在客户端进行渲染的"}`);
    }
}).listen(8888);

console.log('running');
