const chalk = require('chalk')
const fs = require('fs')
const getNotes = () =>  'Your Notes...'

const removeNotes = (title) =>{
    const notes = loadnotes()
    const notestokeep = notes.filter((note) => note.title !== title)
    // const notestokeep = notes.filter(function(note){
    //     return note.title !== title
    // })
    if(notestokeep.length === notes.length){
        console.log(chalk.bgRed("Note not removed!"))
    }
    else{
        console.log(chalk.bgGreen("Note  removed!"))
    }

    saveNotes(notestokeep)
}

const addNotes = (title,body) =>{
    const notes = loadnotes()
    //const duplicateNotes = notes.filter((note) => note.title === title)
    const duplicateNotes = notes.find((note) => note.title === title)
    debugger
    if(!duplicateNotes){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
    }
    else{
        console.log('New note not added!')
    }
}



const saveNotes = (notes) =>{
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)

}

const loadnotes = () =>{
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (error) {
        return []
    }
    

}
const listNotes = () =>{
    const notes = loadnotes()
    console.log(chalk.inverse('Your Notes'))
    notes.forEach((note) => {
        console.log(note.title)
    })
}
const readNote = (title) =>{
    const notes = loadnotes()
    const findNote = notes.find((note) => note.title === title)
    if(findNote){
        console.log(chalk.red.bgBlack(findNote.title))
        console.log(findNote.body)
    }
}
module.exports = {
    getNote: getNotes,
    addNote: addNotes,
    removeNotes: removeNotes,
    listNotes:listNotes,
    readNote:readNote

}