const shell = require('shelljs');

function removeDist() {
  shell.rm('-rf', 'dist');
}
