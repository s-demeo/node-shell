const printWorkingDirectory = require('./pwd');
const ls = require('./ls');
const cat = require('./cat');

process.stdout.write('prompt > ');

process.stdin.on('data', data => {
  const cmd = data.toString().trim();
  let args = cmd.split(' ').slice(1);
  if (cmd === 'pwd') {
    printWorkingDirectory();
  } else if (cmd === 'ls') {
    ls();
  } else if (cmd.split(' ')[0] === 'cat') {
    args.forEach(val => cat(val));
    process.stdout.write('prompt > ');
  } else {
    process.stdout.write('You typed: ' + cmd);
    process.stdout.write('\nprompt > ');
  }
});
