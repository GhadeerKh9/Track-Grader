'use strict'

let headArr = ['Student Name', 'Student Grade', 'Course']

let arrOfObjects = [];



const gradesForm = document.getElementById('gradesForm')
let globalVar = document.getElementById('tableHolder')
let table = document.createElement('table')
globalVar.appendChild(table)
let header1 = document.createElement('tr')
table.appendChild(header1)
for (let i = 0; i < headArr.length; i++) {
    let td1 = document.createElement('th')
    header1.appendChild(td1)
    td1.textContent = headArr[i]
}


function Grades(name, course) {

    this.name = name;
    this.course = course;
    this.grade = 0;

    arrOfObjects.push(this)
    saveToLS();

}
console.log(arrOfObjects)

Grades.prototype.render = function () {

    let row = document.createElement('tr')
    table.appendChild(row)

    let td2 = document.createElement('td')
    row.appendChild(td2)
    td2.textContent = this.name;

    let td5 = document.createElement('td')
    row.appendChild(td5)
    td5.textContent = Math.floor(Math.random() * 101);

    let td4 = document.createElement('td')
    row.appendChild(td4)
    td4.textContent = this.course

}


gradesForm.addEventListener('submit', submitting)

function submitting(event) {

    event.preventDefault();

    let newName = event.target.nameH.value;
    let newCourse = event.target.courseH.value;

    let newEntry = new Grades(newName, newCourse);

    newEntry.render();

    console.log(event)
}
console.log(arrOfObjects);

function saveToLS() {

    let conArr = JSON.stringify(arrOfObjects)
    localStorage.setItem('gradesKey', conArr)


}

function gettingItems() {
    let data = localStorage.getItem('gradesKey')
    let parsed = JSON.parse(data)

    if (parsed) {
        for (let i = 0; i < parsed.length; i++) {
            let instat = new Grades(parsed[i].name, parsed[i].course)

            instat.render();
        }
    }
}

gettingItems();



