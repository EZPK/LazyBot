const express = require('express')
const app = express()
const path = require('path')

const port = 7777


// Helper
let log = (message, data) => {
    console.log(message, data)
}

class Classroom {
    constructor(student) {
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

class Student{
    constructor(id, name, firstname, adress, mail, tel, helper, classe, needs, img) {
        this._id = id
        this.name = name
        this.firstname = firstname
        this.adress = adress
        this.mail = mail
        this.tel = tel
        this.helper = helper
        this.classe = classe
        this.needs = needs
        this.img = img
    }

    set id(id){
        this._id = id
    }
    set name(name){
        this._name = name
    }
    set firstname(firstname){
        this._firstname = firstname
    }
    set adress(adress){
        this._adress = adress
    }
    set mail(mail){
        this._mail = mail
    }
    set tel(tel){
        this._tel = tel
    }
    set helper(helper){
        this._helper = helper
    }
    set classe(classe){
        this._classe = classe
    }
    set needs(needs){
        this._needs = needs
    }
    set img(img){
        this._img = img
    }

    get id(){
        return this._id
    }
    get name(){
        return this._name
    }
    get firstname(){
        return this._firstname
    }
    get adress(){
        return this._adress
    }
    get mail(){
        return this._mail
    }
    get tel(){
        return this._tel
    }
    get helper(){
        return this._helper
    }
    get classe(){
        return this._classe
    }
    get needs(){
        return this._needs
    }
    get img(){
        return this._img
    }
} 


//Config
app.use(express.static('public'));
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
    res.render('cours', {id:null})
})

app.get('/cours/dev', (req, res)=>{
    res.render('cours', {type:'Développement Web'})
})

app.get('/cours/init', (req, res)=>{
    res.render('cours', {id:"Initiation à l'informatique"})
})

app.get('/students', (req, res)=>{
    // let arg1 = ['Duchemin', 'Henry', '7 rue des Pommiers 5874 Benzagte', 'duchemin.henry@gmail.com', '071648571', 'Guillaume DUrant', 'init', 'Envoyer des mails à son petit fils']
    // let arg2 = ['Gonrieux', 'Adeline', '73 chaussée des viroilins 6358 Rozenrée', 'fleurbleu@yahoo.be', '096756321', 'Jacques Dugenoux', 'init', 'Régler ses factures + aller sur youtube']
    // let arg3 = ['Bozon', 'Ludovique', '12 rue des breaux 2593 Sol-en-Sursis', 'geekzor@gmail.com', '052689942', 'Maman', 'dev', 'Jeu vidéo' ]

    let student1 = new Student(1,'Duchemin', 'Henry', '7 rue des Pommiers 5874 Benzagte', 'duchemin.henry@gmail.com', '071648571', 'Guillaume DUrant', 'init', 'Envoyer des mails à son petit fils', 'http://c7.alamy.com/comp/AKMH7E/angry-grumpy-old-man-shaking-his-fist-at-the-world-AKMH7E.jpg')
    let student2 = new Student(2,'Gonrieux', 'Adeline', '73 chaussée des viroilins 6358 Rozenrée', 'fleurbleu@yahoo.be', '096756321', 'Jacques Dugenoux', 'init', 'Régler ses factures + aller sur youtube', 'https://www.shitpostbot.com/resize/585/400?img=%2Fimg%2Fsourceimages%2Fold-dangerous-woman-57c8ec93ed21e.jpeg')
    let student3 = new Student(3,'Bozon', 'Ludovique', '12 rue des breaux 2593 Sol-en-Sursis', 'geekzor@gmail.com', '052689942', 'Maman', 'dev', 'Jeu vidéo', 'http://staloa.free.fr/images/tronche-de-geek.jpg' )
    let student4 = new Student(4, 'Barion', 'Remy', '33 rue du canard 7462 Bol-aux-riz', 'henryLeMalin@hotmail.com', '079633258', 'Son épouse monique', 'dev', 'coder un compilateur en fortran', 'http://img.4plebs.org/boards/tv/image/1411/03/1411032626040.png' )
    let students = []

    students.push(student1, student2, student3, student4)
    console.log(students)

    res.render('students', {students: students})
})

app.get('/students/:id', (req, res)=> {
    res.render('student', {student: req.params.id})
})

// Running
app.listen(port, () => {
    log('Server live on port ', port)
})