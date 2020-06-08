var sumOfProperDivisors = function(n) {
  var sum = 0;
  for (var i = 1; i < n; i++) {
    if (n % i === 0) {
      sum += i;
    }
  }
  return sum;
};
var main = function() {
    //get user input from web page
    var val = Number(document.querySelector("input").value);

    //display result on web page
    document.querySelector("div").innerHTML =
    ("Sum="+ sumOfProperDivisors(val));
};

//2. register the handler after the DOM is complete
window.onload = function() {
    //select the button and register the handler
    document.querySelector("button").addEventListener("click", main);
};