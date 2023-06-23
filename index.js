// import {axios} from 'axios';
// const axios = require('axios');

// Das ist ein Change den ich gemacht hab! :)

function func2 (thisiswhatiwriteintheklammern) {
    let element // Es gibt eine variable und die heist element
    element = document.getElementById("paraid") // mach das html element in die variable element
    element.innerText = thisiswhatiwriteintheklammern
}

function func3 (HelpIHaveNoPlan, para2) {
    let element = document.getElementsByClassName("para")
    console.log(element) 
    element[0].innerText = HelpIHaveNoPlan
    element[1].innerText = para2
}

function func4() {
    document.getElementById('paraid').innerText = "New Text"
}


async function getAgeFromName(name) {
    const response = await fetch('https://api.agify.io?name=' + name)
    const json = await response.json()
    console.log(json)
    return json

    const element = document.getElementById('paraid')
    element.innerText = JSON.stringify(json.age);
    console.log(response.json)
    console.log('Then request gave this status code: ${response.status}')
    console.log(func4)
    console.error("Error! This and this went trebly wrong, dave wrote this code, daves fault!")
    console.warn('WARNING!!!')
    try {
    const response = await axios.get('https://api.agify.io?name=${name}');
    console.log(response.data);
    } catch (error) {
    console.error(error);
    }
  }

  function sayHello(x) {
    console.log(x)
  }

  console.log(returnHello())
  
  function returnHello() {
    return 'Hello'
  }

  let Hello = returnHello()

  console.log(Hello)

function add(x, y) {
   return x + y 
}

let typeOfOperation = '';

function addToInput(x) {
  let input = document.getElementById('input');
  input.value += x;


  // input.value = (input.value + x);
}

function clearInput() {
  document.getElementById('input').value = '';
  document.getElementById('temp').innerText = ''; 
  document.getElementById('operand').innerText = '';
}

function setOperand(operand) {
  document.getElementById('temp').innerText = document.getElementById('input').value;
  document.getElementById('operand').innerText = operand;
  
  // if (input.value != '') {
    //   console.log("is not empty")
    
    // } else {
      //   console.log('is empty')
      // } 
    let listOfTemps = document.getElementById('list')

    let newElement = document.createElement('li')
    console.log(newElement)

    let value = document.getElementById('input').value;
    console.log('Value: ' + value)

    let textNode = document.createTextNode(value);
    console.log('Text Node: ' + textNode.innerText)

    listOfTemps.appendChild(newElement);
    document.getElementById('input').value = '';
}


function calcResult() {
  let input = document.getElementById('input').value;
  let operand = document.getElementById('operand').innerText;
  let resultElement =  document.getElementById('result');
  let temp =  document.getElementById('temp').innerText;

  if (operand == '+') {
    let resultText = Number(temp) + Number(input)
    resultElement.innerText = 'Result: ' + resultText;
    // return;
  } 
  if (operand == '-') {
    let resultText = Number(temp) - Number(input)
    resultElement.innerText = 'Result: ' + resultText;
    // return;
  } 
  if (operand == '*') {
    let resultText = Number(temp) * Number(input)
    resultElement.innerText = 'Result: ' + resultText;
    // return;
  } 
  if (operand == '/') {
    let resultText = Number(temp) / Number(input)
    resultElement.innerText = 'Result: ' + resultText;
    // return;
  } 
  clearInput();
  
}

function lengthOfString() {
  document.getElementById('p1').innerText = document.getElementById('enterString').value.length;
}

// let x = 'bla'
// console.log(x.concat(" ", " blub"))
// Toggle Line Comment = Cmd + G

for (let i = 0; i < 10; i++) {
  let output = ''
  output = output.padStart(5, '#').concat(i).padEnd(11, '#')
  console.log(output)
}
// const THIS_IS_A_CONSTANT = 0;
