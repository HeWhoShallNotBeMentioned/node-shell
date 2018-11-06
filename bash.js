// output a prompt
process.stdout.write('prompt >');

process.stdin.on( 'data', (data)=>{
    const cmd = data.toString().trim(); // remote the newline

    process.stdout.write('You typed: ' + cmd); 
    process.stdout.write('\nprompt > ');

});    