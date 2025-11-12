const os =require('os');

console.log("Hostname:",os.hostname());
console.log("Free memory:",os.freemem());
console.log("Total memory:",os.totalmem());
console.log("uptime(seconds):",os.uptime());