var cashRegister = function(){

  var memory = 0;

  function getBalance() {
      console.log("get balance");
      memory = myCalc.recallMemory();
      console.log(memory)
      display.innerHTML = memory;
  }

  function depositCash() {
    console.log("deposit cash");
    var save = Number(display.innerHTML);
    myCalc.saveMemory(save);
    display.innerHTML = 0;
  }

  function withdraw() {
    console.log("withdraw cash");
    myCalc.clearMemory();
    display.innerHTML = 0;
    memory = 0;
  }

  return {
    getBalance: getBalance,
    depositCash: depositCash,
    withdraw: withdraw
  }

};