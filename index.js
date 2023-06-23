// // import {axios} from 'axios';
// // const axios = require('axios');

// // Das ist ein Change den ich gemacht hab! :)

// function func2 (thisiswhatiwriteintheklammern) {
//     let element // Es gibt eine variable und die heist element
//     element = document.getElementById("paraid") // mach das html element in die variable element
//     element.innerText = thisiswhatiwriteintheklammern
// }

// function func3 (HelpIHaveNoPlan, para2) {
//     let element = document.getElementsByClassName("para")
//     console.log(element) 
//     element[0].innerText = HelpIHaveNoPlan
//     element[1].innerText = para2
// }

// function func4() {
//     document.getElementById('paraid').innerText = "New Text"
// }


// async function getAgeFromName(name) {
//     const response = await fetch('https://api.agify.io?name=' + name)
//     const json = await response.json()
//     console.log(json)
//     return json

//     const element = document.getElementById('paraid')
//     element.innerText = JSON.stringify(json.age);
//     console.log(response.json)
//     console.log('Then request gave this status code: ${response.status}')
//     console.log(func4)
//     console.error("Error! This and this went trebly wrong, dave wrote this code, daves fault!")
//     console.warn('WARNING!!!')
//     try {
//     const response = await axios.get('https://api.agify.io?name=${name}');
//     console.log(response.data);
//     } catch (error) {
//     console.error(error);
//     }
//   }

//   function sayHello(x) {
//     console.log(x)
//   }

//   console.log(returnHello())
  
//   function returnHello() {
//     return 'Hello'
//   }

//   let Hello = returnHello()

//   console.log(Hello)

// function add(x, y) {
//    return x + y 
// }

// let typeOfOperation = '';

// function addToInput(x) {
//   let input = document.getElementById('input');
//   input.value += x;


//   // input.value = (input.value + x);
// }

// function clearInput() {
//   document.getElementById('input').value = '';
//   document.getElementById('temp').innerText = ''; 
//   document.getElementById('operand').innerText = '';
// }

// function setOperand(operand) {
//   document.getElementById('temp').innerText = document.getElementById('input').value;
//   document.getElementById('operand').innerText = operand;
  
//   // if (input.value != '') {
//     //   console.log("is not empty")
    
//     // } else {
//       //   console.log('is empty')
//       // } 
//     let listOfTemps = document.getElementById('list')

//     let newElement = document.createElement('li')
//     console.log(newElement)

//     let value = document.getElementById('input').value;
//     console.log('Value: ' + value)

//     let textNode = document.createTextNode(value);
//     console.log('Text Node: ' + textNode.innerText)

//     listOfTemps.appendChild(newElement);
//     document.getElementById('input').value = '';
// }


// function calcResult() {
//   let input = document.getElementById('input').value;
//   let operand = document.getElementById('operand').innerText;
//   let resultElement =  document.getElementById('result');
//   let temp =  document.getElementById('temp').innerText;

//   if (operand == '+') {
//     let resultText = Number(temp) + Number(input)
//     resultElement.innerText = 'Result: ' + resultText;
//     // return;
//   } 
//   if (operand == '-') {
//     let resultText = Number(temp) - Number(input)
//     resultElement.innerText = 'Result: ' + resultText;
//     // return;
//   } 
//   if (operand == '*') {
//     let resultText = Number(temp) * Number(input)
//     resultElement.innerText = 'Result: ' + resultText;
//     // return;
//   } 
//   if (operand == '/') {
//     let resultText = Number(temp) / Number(input)
//     resultElement.innerText = 'Result: ' + resultText;
//     // return;
//   } 
//   clearInput();
  
// }

// function lengthOfString() {
//   document.getElementById('p1').innerText = document.getElementById('enterString').value.length;
// }

// // let x = 'bla'
// // console.log(x.concat(" ", " blub"))
// // Toggle Line Comment = Cmd + G

// let b = 14;

// function myLoop(x) {
//   for (let i = 0; i < x ; i++) {
//     let output = ''
//     output = output.padStart(10, '#').concat(i).padEnd(20, '#')
//     console.log(output)
//   }
// }

// let a = "some value"  

// let myObject = {
//   c: "some other value"
// }

// class MyClass {
//   constructor(a, b, c) {
//     this.a = a;
//     this.b = b; 
//     this.c = c;
//   }
//   outputProperties() {
//     console.log(this.a + ' ' + this.b + ' ' + this.c)
//   }
// }

// let myInstance = new MyClass(3, 8, 5)
// let myOtherInstance = new MyClass('Peter', 'ist', 'doof')

// myInstance.outputProperties() // 3 8 5
// myOtherInstance.outputProperties() // Peter is doof

// class Animal {
//   shout() {
//     console.log(this.sound)
//   }
// } 

// class Dog extends Animal {
//   constructor() {
//     super();
//     this.sound = 'Woof';
//   }
// }

// class Cat extends Animal {
//   constructor() {
//     super();
//     this.sound = 'Miau'; 
//   }
// }

// let schnuffel = new Dog();
// schnuffel.shout()

// let mize = new Cat();
// mize.shout()

// let anim = new Animal();
// anim.shout()

// const THIS_IS_A_CONSTANT = 0;


let canvas = document.getElementById('canvas');
// console.log('Canvas: ' + canvas)

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let ctx = canvas.getContext('2d');
// console.log('Context: ' + ctx)


// ctx.fillStyle = "#0000FF";
// ctx.fillRect(300, 300, 350, 350);


// ctx.fillStyle = 'rgba(0, 255, 0, .5)'
// ctx.fillRect(100, 10, 150, 100);


let ticker = 0;
let deltaTime = 50; // Tick time in MS

let x = 0;
let y = 0;



start();

// Do setup and start the loop.
function start() {
  console.log('started...');

  addKeyboardListeners(); 

  update();
}

// Loop function that is called once every deltaTime milliseconds.
function update() {
  tick();

  clear();

  // move();

  draw();
  
  setTimeout(() => {
    update();
  }, deltaTime);
}

// Changes the variables that determine where stuff is.   
// function move() {
//   x++;
// }

// Draws all object on the screen.
function draw() {
  ctx.fillRect(x, y, 100, 100)
}

// Just clears the entire canvas.
function clear() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// Count the ticks and print every 10th tick.
function tick() {
  ticker++;
  if (ticker % 10 == 0) {
    console.log(ticker);
  }
}

function addKeyboardListeners() {
  document.onkeydown = (e) => {
    console.log(e.key)
    switch (e.key) {
      case 'd':
        y++
        break;
      case 'e':
        y--
        break;
      case 'f':
        x++
        break;
      case 's':
        x--
        break;
      default:
        break;
    }
  }
}