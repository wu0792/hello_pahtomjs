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
page.open('https://flight.qunar.com/site/oneway_list_inter.htm?searchDepartureAirport=%E5%8C%97%E4%BA%AC&searchArrivalAirport=%E6%99%AE%E5%90%89&searchDepartureTime=2018-04-20&searchArrivalTime=2018-04-27&nextNDays=0&startSearch=true&fromCode=BJS&toCode=HKT&from=qunarindex&lowestPrice=null&favoriteKey=&showTotalPr=null&adultNum=1&childNum=0&cabinClass=', function (status) {
    var end = new Date()
    var spend = end - start
    if (status === 'success') {
        var a = 1
    } else {
        phantom.exit()
    }
})