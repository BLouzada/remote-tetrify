#!/usr/bin/env node
var program = require('commander');

 program
  .version('0.1.0')
  .option('-c, --comando <comando>', 'O comando a ser executado troll/save')
  .option('-u, --usuario <usuario>', 'O usuario que sera trollado ou salvo')
  .parse(process.argv);
console.log('comando: %s usuario: %s ',
        program.comando, program.usuario);

