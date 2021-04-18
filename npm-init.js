function runInit () {
  var child_process = require('child_process');
  child_process.execSync('npm init',{stdio:[0,1,2]});
}
module.exports = runInit;