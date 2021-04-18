#!/usr/bin/env node
var runInit = require('./npm-init');
runInit();

install();
configure();

function install () {
  defineChildProcess('npm i eslint --save-dev');
}

function configure () {
  defineChildProcess('npx eslint --init');
}

function defineChildProcess (userCommand) {
  var child_process = require('child_process');
  child_process.execSync(userCommand,{stdio:[0,1,2]});
}