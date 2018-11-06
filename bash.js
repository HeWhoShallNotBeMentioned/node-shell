const pwd = require('./pwd');
const ls = require('./ls');
const cat = require('./cat');

// output a prompt

process.stdout.write('prompt >');

process.stdin.on('data', data => {
  const cmdArr = data
    .toString()
    .trim()
    .split(' ');
  console.log(cmdArr);
  const cmd = cmdArr[0].toString().trim(); // remote the newline
  const fileName = cmdArr[1].toString().trim();

  if (cmd === 'pwd') {
    pwd();
  } else if (cmd === 'ls') {
    ls();
  } else if (cmd === 'cat') {
    cat(fileName);
  }

  process.stdout.write('You typed: ' + cmd);
  process.stdout.write('\nprompt > ');
});
