const pwd = require('./pwd');
const ls = require('./ls');
const cat = require('./cat');
const curl = require('./curl');
// output a prompt

const done = data => {
  console.log(data);
  process.stdout.write('prompt> ');
};

process.stdin.on('data', data => {
  const entry = data.toString().trim();
  const [cmd, fileName] = entry.split(' ');

  if (cmd === 'pwd') {
    pwd(done);
  } else if (cmd === 'ls') {
    ls(done);
  } else if (cmd === 'cat') {
    cat(fileName, done);
  } else if (cmd === 'curl') {
    curl(fileName, done);
  } else {
    done(console.log('You typed: ' + cmd));
  }
});
process.stdout.write('\nprompt > ');
