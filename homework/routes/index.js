var express = require('express');
var router = express.Router();
var fs = require('fs');
/* GET home page. */
router.get('/', function(req, res, next) {
    fs.readFile('wwh.txt', 'utf-8', function(err, data) { //读文件
        //console.log(data) //split 字符串分割数组
        var num = parseInt(data.split('：')[1]) + 1

        fs.writeFile('wwh.txt', 'index的访问次数：' + num, function(err) {
            res.render('index', {
                title: num
            });
        }) //写文件
    })
});


router.post('/wwh', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*")
    var temp = []
    if (req.body.abc == 1) {
        temp = ['1', '2', '3']
    } else {
        temp = ['4', '5', '6']
    }
    res.send(temp)
});
module.exports = router;