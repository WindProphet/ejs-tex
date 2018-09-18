#!/usr/bin/env node
var fs  = require('fs')
var ejs = require('ejs')
var program = require('commander')
var lescape = require('escape-latex')
// var asciimath2latex = require('asciimath-to-latex')

program
  .version('0.0.0')
  .usage('[options] <template>')
  .option('-a, --argument <file>', 'Arguments json from file')
  .option('-o, --output  <file>', 'Output file')
  .parse(process.argv)

var data = program.argument ? JSON.parse(fs.readFileSync(program.argument, {encoding: 'utf8'})) : {}
if (Array.isArray(data) || typeof(data) != 'object') data = {data: data}
process.stdout.write(ejs.render(fs.readFileSync(program.args[0] || '/dev/stdin', {encoding: 'utf8'}), data, {
  escape: lescape
}))