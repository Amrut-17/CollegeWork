var fs = require('fs');

fs.appendFile('appendedFile.txt', 'Hello Developer', function (err) {
  if (err) throw err;
  console.log('Saved!');
});