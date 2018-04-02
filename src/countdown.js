"use strict";

var system = require('system');
var t = 3,
    interval = setInterval(function () {
        if (t > 0) {
            console.log(t--);
        } else {
            console.log("BLAST OFF!");
            clearInterval(interval)
            phantom.exit(0);
        }
    }, 1000);