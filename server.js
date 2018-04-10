const express = require('express')
const app = express()
const path = require('path')

const port = 7777



// Helper
let log = (message, data) => {
    console.log(message, data)
}

class Classroom{
    constructor(student){
        this.students += student
        this.listOfStudents = []
        this.date = Date.now()
    }

    get ListOfStudents() {
        return this.listOfStudents
    }
    get StudentNumber() {
        return this.listOfStudents.length
    }
    addStudent() {
        listOfStudents.push(student)
    }
}

//Config
app.use(express.static('public'));


// Routing
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+'/views/index.html'))
})

app.get('/manage', (req, res) => {
    let classroom1 = new Classroom('Kevin')
    res.send(classroom1.listOfStudents)

})




// Running
app.listen(port, () => {
    log('Server live on port ', port)
})