const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')

const port = 7777

// Helper
let log = (message, data) => {
    console.log(message, data)
}

const Classroom = require('./modeles/classroom')
const Student = require('./modeles/student')

let students = []
let student1 = new Student(1,'Duchemin', 'Henry', '7 rue des Pommiers 5874 Benzagte', 'duchemin.henry@gmail.com', '071648571', 'Guillaume DUrant', 'init', 'Envoyer des mails à son petit fils', 'http://c7.alamy.com/comp/AKMH7E/angry-grumpy-old-man-shaking-his-fist-at-the-world-AKMH7E.jpg')
let student2 = new Student(2,'Gonrieux', 'Adeline', '73 chaussée des viroilins 6358 Rozenrée', 'fleurbleu@yahoo.be', '096756321', 'Jacques Dugenoux', 'init', 'Régler ses factures + aller sur youtube', 'https://www.shitpostbot.com/resize/585/400?img=%2Fimg%2Fsourceimages%2Fold-dangerous-woman-57c8ec93ed21e.jpeg')
let student3 = new Student(3,'Bozon', 'Ludovique', '12 rue des breaux 2593 Sol-en-Sursis', 'geekzor@gmail.com', '052689942', 'Maman', 'dev', 'Jeu vidéo', 'http://staloa.free.fr/images/tronche-de-geek.jpg' )
let student4 = new Student(4, 'Barion', 'Remy', '33 rue du canard 7462 Bol-aux-riz', 'henryLeMalin@hotmail.com', '079633258', 'Son épouse monique', 'dev', 'coder un compilateur en fortran', 'http://img.4plebs.org/boards/tv/image/1411/03/1411032626040.png' )
students.push(student1, student2, student3, student4)

//Middleware
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.set('view engine', 'ejs')

// Routing
app.get('/', (req, res) => {
    res.render('index')
})

app.get('/manage', (req, res) => {
    let classroom1 = new Classroom('Kevin')
    res.send(classroom1.listOfStudents)
})

app.get('/job', (req, res)=>{
    res.render('job', {id:null})
})

app.get('/job/:id', (req, res)=>{
    res.render('job', {id:req.params.id})
})

app.get('/cours', (req, res)=>{
    res.render('cours', {type:null})
})

app.get('/cours/dev', (req, res)=>{
    res.render('cours', {type:"Développement Web"})
})

app.get('/cours/init', (req, res)=>{
    res.render('cours', {type:"Initiation à l'informatique"})
})

app.get('/students', (req, res)=>{
    res.render('students', {students: students})
})

app.get('/students/:id', (req, res)=> {
    res.render('student', {student: students[req.params.id]})
})

app.get('/create-student', (req, res)=> {
    res.render('create-student', req.body)
})

app.post('/create-student', (req, res)=>{
    let stud = new Student(students.length,req.body.name, req.body.firstname, req.body.adress, req.body.mail, req.body.tel, req.body.contact, req.body.classe, req.body.motivation)
    students.push(stud)
    res.render('students', {students:students})
})


// Running
app.listen(port, () => {
    log('Server live on port ', port)
})