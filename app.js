//const validator = require('validator')
//const chalk = require('chalk')
const notes = require('./Notes.js')
const yargs = require('yargs')
const str = require('./util') 
//const { describe } = require('yargs')
//const strr = str()
// console.log(strr)
// console.log(validator.isURL('example.com'))
// console.log(chalk.green.bgRed.inverse('Success!'))

yargs.command({
    command: 'add',
    describe: 'add a new note',
    builder: {
        title:{
            describe: 'I m a builder dscribe',
            demandOption: true,
        }
    },
    handler(argv){
        notes.addNote(argv.title,argv.body)
    }
})
yargs.command({
    command: 'remove',
    describe:'remove a note',
    builder: {
        title: {
            describe: 'hi',
            demandOption: true,
        }
    },
    handler(argv){
        notes.removeNotes(argv.title)
    }
})

yargs.command({
    command: 'list-note',
    describe: 'List of nodes',
    handler(){
        notes.listNotes()
    }
})
yargs.command({
    command: 'read',
    describe: 'read a note',
    builder: {
        title:{
            describe: 'I am a reader',
            demandOption: true,
        }
    },
    handler(argv){
        notes.readNote(argv.title)
    }
})
const a= yargs.argv
//console.log(a)