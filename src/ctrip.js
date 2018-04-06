var page = require('webpage').create()

page.onConsoleMessage = function (msg, lineNum, sourceId) {
    console.log('CONSOLE: ' + msg + ' (from line #' + lineNum + ' in "' + sourceId + '")');
};

page.onError = function (msg, trace) {

    var msgStack = ['ERROR: ' + msg];

    if (trace && trace.length) {
        msgStack.push('TRACE:');
        trace.forEach(function (t) {
            msgStack.push(' -> ' + t.file + ': ' + t.line + (t.function ? ' (in function "' + t.function + '")' : ''));
        });
    }

    console.error(msgStack.join('\n'));
};

var start = new Date()
page.open('http://www.szjs.gov.cn/bsfw/zdyw_1/zfbz/jgcx/', function (status) {
    var end = new Date()
    var spend = end - start
    if (status === 'success') {
        var a = 1
    } else {
        phantom.exit()
    }
})