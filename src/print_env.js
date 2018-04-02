var system = require('system')

var env = system.env

console.log('---------------------------')
console.log('following props in env:')
for (var key in env) {
    if (env.hasOwnProperty(key)) {
        console.log(key + ':' + env[key])
    }
}
console.log('---------------------------')
phantom.exit()