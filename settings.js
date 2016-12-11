var os = require('os');
var ifaces = os.networkInterfaces();

exports.port = 3000;
exports.host = ifaces.wlan0[0].address;
