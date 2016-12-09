var myCalc = calculatorModule();
var total = myCalc.getTotal();
var recallMemory = myCalc.recallMemory()
var saveMemory = myCalc.saveMemory();
var clearMemory = myCalc.clearMemory();

//var add = myCalc.add(5);



var display = document.getElementById('display');
display.innerHTML = total;

var memory = []
var memory2 = []
var number = 0;
var number2 = 0;
var total = 0;
var operator = false;
var add = false;
var sub = false;
var mult = false;
var div = false;

for(var i = 0; i < 10; i++) {
  document.getElementById(i).addEventListener('click', function(e) {
  var x = e.currentTarget.id
  if(!operator) {
    memory.push(x)
    number = memory.join("")
    display.innerHTML = number
  } else {
    console.log("num2:", operator)
    memory2.push(x)
    number2 = memory2.join("")
    display.innerHTML = number2
    }
  })
}



var clear = document.getElementById("clear").addEventListener('click', function(e) {
  clearMemory;
  memory = [];
  number = 0;
  memory2 = [];
  number2 = []
  display.innerHTML = 0;
  operator = false;
  })


var add = document.getElementById("add").addEventListener('click', function(e) {
    console.log("add");
    number = Number(number)
    myCalc.load(number);
    operator = true;
    add = true;
  })

var sub = document.getElementById("sub").addEventListener('click', function(e) {
  console.log("subtract");
  number = Number(number)
  myCalc.load(number);
  operator = true;
  sub = true;
  })

var multiply = document.getElementById("mult").addEventListener('click', function(e) {
  console.log("multiply");
  number = Number(number)
  myCalc.load(number);
  operator = true;
  mult = true;

  })

var divide = document.getElementById("divide").addEventListener('click', function(e) {
  console.log("divide");
  number = Number(number)
  myCalc.load(number);
  operator = true;
  div = true;
  })



var equal = document.getElementById("equal").addEventListener('click', function(e) {
  console.log("equal");

  if(add) {
    number2 = Number(number2)
    total = myCalc.add(number2);
    console.log(total)
    display.innerHTML = total;
    add = false;
    operator = false;

  } else if (sub){
      number2 = Number(number2)
      total = myCalc.subtract(number2);
      console.log(total)
      display.innerHTML = total;
      sub = false;
      operator = false;

    } else if(mult) {
      number2 = Number(number2)
      total = myCalc.multiply(number2);
      console.log(total)
      display.innerHTML = total;
      mult = false;
      operator = false;

      } else if(div) {
        number2 = Number(number2)
        total = myCalc.divide(number2);
        console.log(total)
        display.innerHTML = total;
        div = false;
        operator = false;
      }

})




var getBalance = document.getElementById("getBalance").addEventListener('click', function(e) {
  console.log("get balance");
  })

var depositCash = document.getElementById("deposit").addEventListener('click', function(e) {
  console.log("deposit cash");
  })

var withdraw = document.getElementById("withdraw").addEventListener('click', function(e) {
  console.log("withdraw cash");
  })


