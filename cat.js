const fs = require('fs');
module.exports = function(file1) {
  fs.readFile(`./${file1}`, (err, data) => {
    if (err) {
      throw err;
    } else {
      process.stdout.write(data.toString().trim());
      process.stdout.write('\n');
    }
  });
};
