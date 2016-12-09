var myCalc = calculatorModule();
var total = myCalc.getTotal();
var recallMemory = myCalc.recallMemory()
var saveMemory = myCalc.saveMemory();
var clearMemory = myCalc.clearMemory();

//var add = myCalc.add(5);



var display = document.getElementById('display');
display.innerHTML = total;

var memory = []
var number = 0;
var total = 0;

for(var i = 0; i < 10; i++) {
  document.getElementById(i).addEventListener('click', function(e) {
  var x = e.currentTarget.id
  memory.push(x)
  number = memory.join("")
  display.innerHTML = number
  // myCalc.getTotal()
  })
}

// function displaying(num) {

// }


var clear = document.getElementById("clear").addEventListener('click', function(e) {
  clearMemory;
  memory = [];
  number = 0;
  display.innerHTML = 0;
  })


var add = document.getElementById("add").addEventListener('click', function(e) {
  console.log("add");
  myCalc.load(number);
  total = myCalc.add(number);
  console.log(total)

  })



















var sub = document.getElementById("sub").addEventListener('click', function(e) {
  console.log("subtract");
  })

var multiply = document.getElementById("mult").addEventListener('click', function(e) {
  console.log("multiply");
  })

var divide = document.getElementById("divide").addEventListener('click', function(e) {
  console.log("divide");
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


// probably trash

// var cero = document.getElementById('0');
// var doubleC = document.getElementById('00');
// var one = document.getElementById('1');
// var two = document.getElementById('2');
// var three = document.getElementById('3');
// var four = document.getElementById('4');
// var five = document.getElementById('5');
// var six = document.getElementById('6');
// var seven = document.getElementById('7');
// var eight = document.getElementById('8');
// var nine = document.getElementById('9');
// var divide = document.getElementById('divide');
// var multiply = document.getElementById('mult');
// var subtract = document.getElementById('sub');
// var add = document.getElementById('add');
// var equal = document.getElementById('equal');
// var getBalance = document.getElementById('getBalance');
// var depositCash = document.getElementById('deposit');
// var withdrawCash = document.getElementById('withdraw');

// this.addEventListener('click', function(e) {
//   x = e.currentTarget.id
//   x = Number(x)
//   display.innerHTML = myCalc.load(x)
//   }

// one.addEventListener('click', function(e) {
//   x = e.currentTarget.id
//   x = Number(x)
//   display.innerHTML = myCalc.load(x)
//   memDisp.push(x)
// })

// two.addEventListener('click', function(e) {
//   x = e.currentTarget.id
//   x = Number(x)
//   display.innerHTML = myCalc.load(x)
// })

// three.addEventListener('click', function(e) {
//   x = e.currentTarget.id
//   x = Number(x)
//   display.innerHTML = myCalc.load(x)
// })

// four.addEventListener('click', function(e) {
//   x = e.currentTarget.id
//   x = Number(x)
//   display.innerHTML = myCalc.load(x)
// })

// five.addEventListener('click', function(e) {
//   x = e.currentTarget.id
//   x = Number(x)
//   display.innerHTML = myCalc.load(x)
// })

// six.addEventListener('click', function(e) {
//   x = e.currentTarget.id
//   x = Number(x)
//   display.innerHTML = myCalc.load(x)
// })

// seven.addEventListener('click', function(e) {
//   x = e.currentTarget.id
//   x = Number(x)
//   display.innerHTML = myCalc.load(x)
// })

// eight.addEventListener('click', function(e) {
//   x = e.currentTarget.id
//   x = Number(x)
//   display.innerHTML = myCalc.load(x)
// })

// nine.addEventListener('click', function(e) {
//   x = e.currentTarget.id
//   x = Number(x)
//   display.innerHTML = myCalc.load(x)
// })

// cero.addEventListener('click', function(e) {
//   x = e.currentTarget.id
//   x = Number(x)
//   display.innerHTML = myCalc.load(x)
// })

// doubleC.addEventListener('click', function(e) {
//   x = e.currentTarget.id
//   x = Number(x)
//   display.innerHTML = myCalc.load(x)
// })
// var btnBox = document.getElementById('btnBox');

// for (var i = 5; i >= 0; i--) {
//   var btn = document.createElement('button');
// btn.id = 'btn' + i;
// btn.innerHTML = "Click Me"
// btn.addEventListener("click", function(e) {
//   console.log(e.currentTarget.id)
// })

// btnBox.appendChild(btn);



// document.getElementById('btns').addEventListener('click', function(e) {
//   console.log(e.currentTarget.classList)

//   if(e.currentTarget.classList.contains("clear")){
//       myCalc.clearMemory();
//       display.innerHTML = 0;
//       console.log("a")
//       }
// })
