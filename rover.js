// Need to add stylized buttons and need to fix the functions so that they work with the buttons
// Need to add other rovers
// Need to make the obstacles random
// And make a function for the obstacles
// Need to embed the console responses into the HTML file so that user sees response without console. 
// Need to make buttons function with keyboard keys
var kata = {
  position: [0,0],
  direction: 'N'
};

var testCom = "";

function submitCommand() {
  testCom = document.forms["userInput"]["roverCom"].value;
  testCom = String(testCom);
  if (testCom === "forward") {
    goForward(kata);
  }
  else if (testCom === "backward") {
    goBackward(kata);
  }
  else {
    move(kata, testCom);
}
}






function goForward(rover) {

  switch(rover.direction) {
    case 'N':
      rover.position[0]++
      break;
    case 'E':
      rover.position[1]++
      break;
    case 'S':
      rover.position[0]--
      break;
    case 'W':
      rover.position[1]--
      break;
  };
  function tenten(rover) {
    if (rover.position[0] === 10) {
      console.log("You are on the EDGE!");
    }
    else if (rover.position[1] === 10) {
      console.log("You are on the EDGE!");
    }
    else if (rover.position[1] > 10) {
      rover.position[1] = 0;
      console.log("You went over the edge");
    }
    else if (rover.position[0] > 10) {
      rover.position[0] = 0;
      console.log("You went over the edge");
    }
    else if (rover.position[0] >= 5 && rover.position[0] <= 8) {
      console.log("You are in a crater bro!!");
    }
    else if (rover.position[1] >= 1 && rover.position[0] <= 3) {
      console.log("It will take you two sols to get out");
    }
    else {
      console.log("....")
      //later I will put a delay to the function
    } //close else statement
  } //close tenten function
  tenten(rover);
  console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]");
}

goForward(kata);
// Make sure you use data structures (basic data types, arrays & objects)
// Make sure you use boolean and conditionals
// Make sure you use loops to avoid code repetition
// Make sure you use functions and organize your code


function move(rover, dir) {
  var updateDir = "Now your Mars Rover is facing ";
  var newdir = dir.split("");
  var idx = 0;
// Need to add an alternatative way to update newdir. Using the buttons. 


  while (idx <= newdir.length) {

    switch (newdir[idx]) {
    case "f":
    rover.direction = "N";
    console.log(updateDir + rover.direction);

    break;

    case "b":
    rover.direction = "S"
    console.log(updateDir + rover.direction);

    break;

    case "l":
    rover.direction = "W"
    console.log(updateDir + rover.direction);

    break;

    case "r":
    rover.direction = "E"
    console.log(updateDir + rover.direction);

    break;

    default:
    console.log("...now goForward");
    break;
  };
  idx += 1;

  // console.log("Your rover is currently facing " + kata.direction + " and is standing on point [" + kata.position + "]");
  }

}

// Below you have the functions that you need embed the javascript into the HTML File

  var left = "l";
  var right = "r";
  var front = "f";
  var back = "b";


function dirPad (roverdirection) {

  if (roverdirection === left) {
    move(kata, "l");
  }
  else if (roverdirection === right) {
    move(kata, "r");
  }
  else if (roverdirection === front) {
    move(kata, "f");
  }
  else if (roverdirection === back) {
    move(kata, "b");
  };
}
