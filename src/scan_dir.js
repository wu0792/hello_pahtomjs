"use strict";
var system = require('system');
var fs = require('fs');

if (system.args.length !== 2) {
    console.log("Usage: phantomjs scandir.js DIRECTORY_TO_SCAN");
    phantom.exit(1);
}

var scanDirectory = function (path) {
    if (fs.exists(path) && fs.isFile(path)) {
        console.log(path);
    } else if (fs.isDirectory(path)) {
        fs.list(path).forEach(function (e) {
            if (e !== "." && e !== "..") {    //< Avoid loops
                scanDirectory(path + '/' + e);
            }
        });
    }
};
scanDirectory(system.args[1]);
phantom.exit();