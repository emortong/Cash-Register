var myCalc = calculatorModule();
// var getTotal = myCalc.getTotal();
// var recallMemory = myCalc.recallMemory()
// var saveMemory = myCalc.saveMemory();
// var clearMemory = myCalc.clearMemory();


var display = document.getElementById('display');
display.innerHTML = 0;
var total = 0;
var operator = false;
var add = false;
var sub = false;
var mult = false;
var div = false;

for(var i = 0; i < 10; i++) {
  document.getElementById(i).addEventListener('click', function(e) {
    x = e.currentTarget.id
    x = Number(x);
    if(display.innerHTML === "0") {
      display.innerHTML = x
      operator = false;
    } else if(operator) {
      display.innerHTML = x
      operator = false;
        if(add) {
          total = myCalc.add(x);
          add = false;
        } else if(sub) {
          total = myCalc.subtract(x);
          sub = false;
        } else if(mult) {
          total = myCalc.multiply(x);
          mult = false;
        } else if(div) {
          total = myCalc.divide(x);
          div = false;
        }
    }
    else {
      display.innerHTML += x
      }
  })
}

var clear = document.getElementById("clear").addEventListener('click', function(e) {
  display.innerHTML = 0;
  total = 0;
  operator = false;
  add = false;
  sub = false;
  mult = false;
  div = false;
})

var add = document.getElementById("add").addEventListener('click', function(e) {
    if(total !== 0) {
      display.innerHTML = total
    }
    var disp = Number(display.innerHTML);
    total = myCalc.load(disp);
    operator = true;
    add = true;
  })

var sub = document.getElementById("sub").addEventListener('click', function(e) {;
    if(total !== 0) {
      display.innerHTML = total
    }
    var disp = Number(display.innerHTML);
    total = myCalc.load(disp);
    operator = true;
    sub = true;
  })

var multiply = document.getElementById("mult").addEventListener('click', function(e) {
  if(total !== 0) {
    display.innerHTML = total
  }
  var disp = Number(display.innerHTML);
  total = myCalc.load(disp);
  operator = true;
  mult = true;

  })

var divide = document.getElementById("divide").addEventListener('click', function(e) {
  if(total !== 0) {
    display.innerHTML = total
  }
  var disp = Number(display.innerHTML);
  total = myCalc.load(disp);
  operator = true;
  div = true;
  })

var equal = document.getElementById("equal").addEventListener('click', function(e) {
  display.innerHTML = total;
})


var getBalance = document.getElementById("getBalance").addEventListener('click', function(e) {
  console.log("get balance");
  })

var depositCash = document.getElementById("deposit").addEventListener('click', function(e) {
  console.log("deposit cash");
  })

var withdraw = document.getElementById("withdraw").addEventListener('click', function(e) {
  console.log("withdraw cash");
  });