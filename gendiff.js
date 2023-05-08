#!/usr/bin/env node 

const { program } = require('commander');

program
  .description("Compares two configuration files and shows a difference.")
  .option('-V, --version', "output the version number")
  .argument('<filepath1> <filepath2>')
  .option('-f, --format <type>', 'output format')

program.parse();