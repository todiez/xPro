import { dog } from "./dog.js";

const student = dog("Paz", 5);
student.printName();
student.printAge();


const element = document.getElementById('target');

const html = `The dog name is ${student.name}, the age is ${student.age}`;

element.innerHTML = html;