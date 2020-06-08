// jshint esversion: 6
let addButtons = function() {

  //array of English words/phrases for buttons
  let words = ["pardon me", "excuse me", "hail", "I say", "sir", "madam", "officer", "friend", "alpha", "bravo", "charley", "delta", "to hang?","direct a ship?","halt?","leave?"];

  let newTD, newButton, tableRows = document.querySelectorAll("tr");

  //add a td containing 4 buttons to row 1
  newTD = document.createElement("td");

  //create buttons
  for (let i = 0; i < 4; ++i) {

    //create  button
    newButton = document.createElement("button");
    //get button content from array
    newButton.textContent = words[i];
    //set id attribute
    newButton.setAttribute("id", "btn" + i);
    //set style class attribute

    newButton.setAttribute("class", "btn" + i);


    //append button to the td element
    newTD.appendChild(newButton);
  }
  //append new td element to initial row of table
  tableRows[0].appendChild(newTD);

  //add a button group to row 2 of table
  newTD = document.createElement("td");
  for (let i = 4; i < 8; ++i) {
    newButton = document.createElement("button");
    newButton.textContent = words[i];
    newButton.setAttribute("id", "btn" + i);
    newButton.setAttribute("class", "btn" + i);
    //append button to the td element
    newTD.appendChild(newButton);
  }
  //append new td element to second row of table
  tableRows[1].appendChild(newTD);

  //add a button group to row 3 of table
  newTD = document.createElement("td");
  for (let i = 8; i < 12; ++i) {
    newButton = document.createElement("button");
    newButton.textContent = words[i];
    newButton.setAttribute("id", "btn" + i);
    newButton.setAttribute("class", "btn" + i);
    //append button to the td element
    newTD.appendChild(newButton);
  }
  //append new td element to second row of table
  tableRows[2].appendChild(newTD);
   //add a button group to row 3 of table
  newTD = document.createElement("td");
  for (let i = 12; i < 16; ++i) {
    newButton = document.createElement("button");
    newButton.textContent = words[i];
    newButton.setAttribute("id", "btn" + i);
    newButton.setAttribute("class", "btn" + i);
    //append button to the td element
    newTD.appendChild(newButton);
  }
  //append new td element to second row of table
  tableRows[3].appendChild(newTD);
   //add a button group to row 3 of table
};

// define a dispatcher to handle all button clicks
let dispatcher = function() {
  //this keyword is set to the button that fired the event
  console.log(this.id);
  //dispatch on button id
  if (this.id == "btn0")
    document.getElementById("outBox").value = document.getElementById("outBox").value + "Avast! ";
  else if (this.id == "btn1")
    document.getElementById("outBox").value += "Arr! ";
  else if (this.id == "btn2")
    document.getElementById("outBox").value += "Ahoy! ";
  else if (this.id == "btn3")
    document.getElementById("outBox").value += "Shape up! ";
  else if (this.id == "btn4")
    document.getElementById("outBox").value += "Matey! ";
  else if (this.id == "btn5")
    document.getElementById("outBox").value += "Proud beauty! ";
  else if (this.id == "btn6")
    document.getElementById("outBox").value += "Foul blaggart! ";
  else if (this.id == "btn7")
    document.getElementById("outBox").value += "Mate! ";
    else if (this.id == "btn8")
      document.getElementById("outBox").value += "dance the hempen jig?";
    else if (this.id == "btn9")
        document.getElementById("outBox").value += "haul wind?";
        else if (this.id == "btn10")
            document.getElementById("outBox").value += "weigh anchor?";
            else if (this.id == "btn11")
                document.getElementById("outBox").value += "heave?";
};

//define the onload handler
let onloadHandler = function() {

  //add all buttons to the table
  addButtons();

  //Register the onclick handler for all the buttons
  var buttons = document.querySelectorAll("button");
  for (let i = 0; i < buttons.length; ++i) {
    buttons[i].addEventListener("click", dispatcher);
  }

};

//register the onload handler
window.addEventListener("load", onloadHandler);
window.addEventListener("load", clearButton);
