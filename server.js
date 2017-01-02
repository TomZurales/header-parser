var express = require('express');
var app = express();

var curTimestamp;
var curDateTime
app.get('/:time', function (req, res){
    res.setHeader('Content-Type', 'application/json');
    var curDate = new Date();
    if(isValidDate(req.params.time) || isValidUnix(req.params.time)){
        curTimestamp = Math.floor(Date.now() / 1000)
        curDateTime = createNaturalDate(curDate);
        res.end(JSON.stringify({ "unix": curTimestamp, "natural": curDateTime }));
    }
    res.end(JSON.stringify({ "unix": null, "natural": null }));
});

app.listen(8080);

function isValidDate(time){
    var inputDate = new Date(time);
    return inputDate != 'Invalid Date';
}

function isValidUnix(time){
    if(time < 0) return false;
    var inputDate = new Date().setTime(time * 1000);
    return inputDate != 'Invalid Date' && time > 0;
}

function createNaturalDate(date){
    var month, day, year;
    switch (date.getMonth()) {
        case 0:
            month = 'January';
            break;
        case 1:
            month = 'February';
            break;
        case 2:
            month = 'March';
            break;
        case 3:
            month = 'April';
            break;
        case 4:
            month = 'May';
            break;
        case 5:
            month = 'June';
            break;
        case 6:
            month = 'July';
            break;
        case 7:
            month = 'August';
            break;
        case 8:
            month = 'September';
            break;
        case 9:
            month = 'October';
            break;
        case 10:
            month = 'November';
            break;
        case 11:
            month = 'December';
            break;
        default:
            month = null;
    }
    var naturalDate = month + " " + date.getDate() + ", " + date.getFullYear();
    return naturalDate;
}