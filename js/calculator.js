function calculatorModule(x) {
    //private
    var memory = [];
    var total = [];

    var isValid = function(x) {
      if(typeof x === "number") {
        return true;
      } else {
        throw new Error("not a number");
      }
    }
    //public
    return {
      load: function(x) {
        if(isValid(x)){
          total.push(x)
          return total.join("");
        }
      },
      getTotal: function() {
        return total;
      },
      add: function(x) {
        if(isValid(x)){
          return total += x;
        }
      },
      subtract: function(x) {
        if(isValid(x)){
          return total -= x;
        }
      },
      multiply: function(x) {
        if(isValid(x)){
          return total *= x;
        }
      },
      divide: function(x) {
        if(isValid(x)){
          return total /= x;
        }
      },
      recallMemory: function() {
        return memory;
      },
      saveMemory: function() {
        memory.push(total);
        console.log(memory)
      },
      clearMemory: function() {
        total = [];
        //memory = [];
      }
    };
 }