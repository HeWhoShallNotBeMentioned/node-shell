const pwd = require('./pwd');
const ls = require('./ls');

// output a prompt

process.stdout.write('prompt >');

process.stdin.on('data', data => {
  const cmd = data.toString().trim(); // remote the newline

  if (cmd === 'pwd') {
    pwd();
  } else if (cmd === 'ls') {
    ls();
  }

  process.stdout.write('You typed: ' + cmd);
  process.stdout.write('\nprompt > ');
});
