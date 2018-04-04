var system = require('system')

function sleepSort(arr, callback) {
    var sortedCount = 0
    for (var i = 0; i < arr.length; i++) {
        setTimeout((function (j) {
            console.log(arr[j])
            if (j === arr.length - 1) {
                callback()
            }
        })(i), arr[i]);
    }
}

if (system.args.length < 2) {
    console.log('arguments too short.')
} else {
    console.log('start here.')
    sleepSort(system.args[1].split(',').map(function (val) {
        return +val;
    }), function () {
        console.log('well done.')
        phantom.exit()
    })
}