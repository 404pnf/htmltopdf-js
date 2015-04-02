var fs = require('fs'),
    express = require('express'),
    wkhtmltopdf = require('wkhtmltopdf'),
    uuid = require('node-uuid'),
    app = express();

// ## 安装wkhtmltopdf
// http://wkhtmltopdf.org/

// ## 如何使用wkhtmltopdf
// https://github.com/devongovett/node-wkhtmltopdf
// 使用方法
// // Optional callback
// wkhtmltopdf('http://google.com/', { pageSize: 'letter' }, function (code, signal) {
// });

app.get('/', function (req, res) {
    var s = '<meta charset="utf-8"><h1>呼呼haha</h1>',
        filename = uuid.v4() + '.pdf',
        options = {
            output: filename,
            footerCenter: "页脚也可以用中文",
            pageSize: "A4",
        };

    // 让用户下载pdf
    // wkhtmltopdf(s, options, function (code, signal) {
    //     res.download(filename, "huhu.pdf");
    // });

    // 直接让用户预览生成的pdf
    wkhtmltopdf(s).pipe(res);
});

app.listen(3000, function () {
    console.log("port 3000.");
});
