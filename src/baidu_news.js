var page = require('webpage').create();
page.open('http://news.baidu.com/', function () {
    debugger;  // this is necessary
    page.evaluate(function () {
        setTimeout(function () {
            debugger;
            window.callPhantom('done');
        }, 0);
    });
});





// var page = require('webpage').create()

// page.open('http://news.baidu.com/', function (status) {
//     if (status === 'success') {
//         // var hrefs = page.evaluate(function () {
//         //     debugger
//         //     return document.title;
//         // })
//         page.render('./baidunews/load.png')
//         page.includeJs('./lib/jquery.js', function () {
//             var hrefs = page.evaluate(function () {
//                 // page.render('./baidunews/evaluate.png')
//                 // return document.querySelectorAll('a')[1].innerText

//                 return jQuery('a')[130].innerHTML
//             });

//             debugger
//             console.log('href:' + hrefs)
//         })

//         // setTimeout(function () {
//         //     getHrefs()
//         // }, 2000);

//         debugger

//         // phantom.exit()
//     } else {
//         phantom.exit()
//     }
// })