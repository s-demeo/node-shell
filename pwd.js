module.exports = function printWorkingDirectory() {
  process.stdout.write(process.cwd());
  process.stdout.write('\nprompt > ');
};
