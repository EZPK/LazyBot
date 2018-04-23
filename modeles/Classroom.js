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

module.exports = Classroom