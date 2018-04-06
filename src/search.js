var page = require('webpage').create();
//phantom.outputEncoding="utf-8";
debugger
page.onError = function (msg, trace) {
    console.log(msg);
    var a = 1
    trace.forEach(function (item) {
        console.log('  ', item.file, ':', item.line);
    });
};

page.onLoadStarted = function () {
    var currentUrl = page.evaluate(function () {
        return window.location.href;
    });
    console.log('Current page ' + currentUrl + ' will be gone...');
    console.log('Now loading a new page...');
};

var b = 2
page.onLoadFinished = function () {
    loadFinish = true
    console.log('finished...' + (++b))
}

page.open("http://www.baidu.com", function (status) {
    if (status === "success") {
        console.log(page.title);
    } else {
        console.log("Page failed to load.");
    }
    phantom.exit(0);
});

// page.onLoadStarted = function () {
//     // loadFinish = false
//     var a = 1
// }

// var page = require('webpage').create(),
//     loadFinish = true,
//     currentStepIndex = 0

// page.open('http://www.baidu.com', function (status) {
//     var a = 1
// })

// page.onLoadStarted = function () {
//     loadFinish = false
// }

// page.onLoadFinished = function () {
//     loadFinish = true
// }

// return

// page.onError = function (msg, trace) {
//     var msgStack = ['ERROR: ' + msg];

//     if (trace && trace.length) {
//         msgStack.push('TRACE:');
//         trace.forEach(function (t) {
//             msgStack.push(' -> ' + t.file + ': ' + t.line + (t.function ? ' (in function "' + t.function + '")' : ''));
//         });
//     }

//     console.error(msgStack.join('\n'));
// }

// var steps = [
//     //open url
//     function () {
//         // page.open('http://www.szjs.gov.cn/bsfw/zdyw_1/zfbz/jgcx/', function (status) {
//         page.open('http://www.baidu.com', function (status) {
//             var a = 1
//         })
//     },
//     //fill input
//     function () {
//         console.log('1')
//     },
//     //click the submit button
//     function () {
//         console.log('2')
//     }
// ]

// page.open('http://www.baidu.com', function (status) {
//     var a = 1
// })

// interval = setInterval(function () {
//     if (loadFinish) {
//         if (typeof steps[currentStepIndex] === 'function') {
//             console.log('[step]:' + currentStepIndex)
//             steps[currentStepIndex]()
//             currentStepIndex++
//         } else {
//             console.log('[finish]')
//             clearInterval(interval)
//         }
//     }
// }, 100)