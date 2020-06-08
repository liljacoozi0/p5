// jshint esversion: 7
 
//define event handler
let main = function() {
  //dispatch on button id
 
  if (this.id == "btn1") {
  	var ol = document.createElement("ol");
  	ol.setAttribute("id", "firstList");
  	var div = document.getElementById("outDiv");
  	div.appendChild(ol);
    //handle button 1 here
  }
  elif(this.id == "btn2") {
  	var li = document.createElement("li");
  	var content = document.getElementById("text1").value;
  	li.textContent = content;
  	var ol = document.getElementById("firstList");
  	ol.appendChild(li);
  }
  elif(this.id == "btn3") {
  	var ol = document.getElementById("firstList");
  	var item = ol.lastChild;
  	ol.removeChild(item);
  }
    else(this.id == "btn4") {
  	var li = document.createElement("li");
  	li.textContent = document.getElementById("text1").value;
  	li.setAttribute("type", inputType);
  }
};
 
//register event handler
window.addEventListener("load", function() {
  let buttons = document.querySelectorAll("button");
  for (var i = 0; i < buttons.length; ++i)
    //when the button gets clicked, who ya gonna call?
    buttons[i].addEventListener("click", main);
});