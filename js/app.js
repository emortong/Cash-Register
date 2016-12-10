var myCalc = calculatorModule();
var myReg = cashRegister();

var display = document.getElementById('display');
display.innerHTML = 0;
var total = 0;
var operator = false;
var add = false;
var sub = false;
var mult = false;
var div = false;


for(var i = 0; i < 11; i++) {
  document.getElementById(i).addEventListener('click', function(e) {
    x = e.currentTarget.id
    if(x === "10") {
      x = "00";
    }
    if(display.innerHTML === "0") {
      display.innerHTML = x
      operator = false;
    } else if(operator) {
      display.innerHTML = x
      operator = false;
        if(add) {
          total = myCalc.add(Number(x));
          add = false;
        } else if(sub) {
          total = myCalc.subtract(Number(x));
          sub = false;
        } else if(mult) {
          total = myCalc.multiply(Number(x));
          mult = false;
        } else if(div) {
          total = myCalc.divide(Number(x));
          div = false;
        }
    } else {
        display.innerHTML += x
      }
  })
}

var clear = document.getElementById("clear")
  .addEventListener('click', function(e) {
    display.innerHTML = 0;
    total = 0;
    operator = false;
    add = false;
    sub = false;
    mult = false;
    div = false;
  })

function operating() {
  if(total !== 0) {
    display.innerHTML = total
  }
  var disp = Number(display.innerHTML);
  total = myCalc.load(disp);
}


var add = document.getElementById("add")
  .addEventListener('click', function(e) {
    operating();
    operator = true;
    add = true;
  })

var sub = document.getElementById("sub")
  .addEventListener('click', function(e) {;
    operating();
    operator = true;
    sub = true;
  })

var multiply = document.getElementById("mult")
  .addEventListener('click', function(e) {
    operating();
    operator = true;
    mult = true;
  })

var divide = document.getElementById("divide")
  .addEventListener('click', function(e) {
    operating();
    operator = true;
    div = true;
  })

var equal = document.getElementById("equal")
  .addEventListener('click', function(e) {
    display.innerHTML = total;
})

var dot = document.getElementById("dot")
  .addEventListener('click', function(e) {
    display.innerHTML += "."
  })

var getBalance = document.getElementById("getBalance")
.addEventListener('click', function(e) {
  myReg.getBalance();
})

var depositCash = document.getElementById("deposit")
.addEventListener('click', function(e) {
  myReg.
})