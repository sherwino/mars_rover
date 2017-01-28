// var myRover = {
//   position: [0,0], 
//   direction: 'N'
// };

// function goForward(rover) {
//   switch(rover.direction) {
//     case 'N':
//       rover.position[0]++
//       break;
//     case 'E':
//       rover.position[1]++
//       break;
//     case 'S':
//       rover.position[0]--
//       break;
//     case 'W':
//       rover.position[1]--
//       break;
//   };

//   console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]")
// }

// goForward(myRover);

// Make sure you use data structures (basic data types, arrays & objects)
// Make sure you use boolean and conditionals
// Make sure you use loops to avoid code repetition
// Make sure you use functions and organize your code

var kata = {
  longlat: [0,0],
  direction: "N",
};

var start = ("Mars Rover Kata is currently facing " + kata.direction + " and is standing on point [" + kata.longlat + "]");
console.log(start);

function move(rover) {
  var newdir = (prompt("Which way would you like to move? w (forward), s (backward), a (left), d (right) "));
  var updateDir = "Now your Mars Rover is facing "
  var updateLongLat = "It was moved to..."

  switch(newdir) {
    case "w":
    rover.direction = "N"
    rover.longlat[0]+=1
    updateDir += rover.direction;
    updateLongLat += "[" + rover.longlat + "]";
    console.log("Moving north one step")
    console.log(updateDir);
    console.log(updateLongLat);
    break;
    
    case "s":
    rover.longlat[0]-=1
    rover.direction = "S"
    updateDir += rover.direction;
    updateLongLat += "[" + rover.longlat + "]";
    console.log("Moving south one step")
    console.log(updateDir);
    console.log(updateLongLat);
    break;
    
    case "a":
    rover.longlat[1]-=1
    rover.direction = "W"
    updateDir += rover.direction;
    updateLongLat += "[" + rover.longlat + "]";
    console.log("Moving west one step")
    console.log(updateDir);
    console.log(updateLongLat);
    break;
    
    case "d":
    rover.longlat[1]+=1
    rover.direction = "E"
    updateDir += rover.direction;
    updateLongLat += "[" + rover.longlat + "]";
    console.log("Moving east one step")
    console.log(updateDir);
    console.log(updateLongLat);
    break;
    
    default:
    console.log("You didn't make any moves")
    break;
  };

}


