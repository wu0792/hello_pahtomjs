'use strict'
var page = require('webpage').create()

page.onConsoleMessage = function (message) {
    console.log('from console:' + message)
}

page.open('http://phantomjs.org/', function (status) {
    if (status === 'success') {
        page.includeJs('http://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js', function () {
            page.evaluate(function () {
                console.log('$(".explanation").text():' + $(".explanation").text())
            })
        })
    } else {
        phantom.exit(0)
    }
})