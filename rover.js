var myRover = {
  position: [0,0],
  direction: 'N'
};

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

  console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]")
}

goForward(myRover);

// Make sure you use data structures (basic data types, arrays & objects)
// Make sure you use boolean and conditionals
// Make sure you use loops to avoid code repetition
// Make sure you use functions and organize your code


function move(rover) {
  var newdir = (prompt("Which way would you like to move? f (forward), b (backward), l (left), r (right) "));
  var updateDir = "Now your Mars Rover is facing "
  var dirList = newdir.split("");

  switch(dirList) {
    case "f":
    rover.direction = "N"
    updateDir += rover.direction;
    console.log(updateDir);

    break;

    case "b":
    rover.direction = "S"
    updateDir += rover.direction;
    console.log(updateDir);

    break;

    case "l":
    rover.direction = "W"
    updateDir += rover.direction;
    console.log(updateDir);

    break;

    case "r":
    rover.direction = "E"
    updateDir += rover.direction;
    console.log(updateDir);

    break;

    default:
    console.log("You didn't make any moves")
    break;
  };
console.log("Your rover is currently facing " + myRover.direction + " and is standing on point [" + myRover.position + "]");
}
