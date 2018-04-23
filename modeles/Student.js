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

module.exports = Student