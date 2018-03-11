// Rover Object Goes Here
// ======================

// ======================

function turnLeft(roverMars){                
  console.log("turnLeft was called!");
  switch (roverMars.direction) {              // depends on the actual direction, the rover changes it
    case "N":
      roverMars.direction = "W"
      
      break;
    case "W":
      roverMars.direction = "S"
      
      break;
    case "S":
      roverMars.direction = "E"
      
      break; 
  
    case "E":
      roverMars.direction = "N"
        
      break;
  }
  console.log("La nueva direccion es:" , roverMars.direction)

}

function turnRight(roverMars){                 // depends on the actual direction, the rover changes it
  console.log("turnRight was called!");
  switch (roverMars.direction) {
    case "N":
      roverMars.direction = "E"
      
      break;
    case "E":
      roverMars.direction = "S"
      
      break;
    case "S":
      roverMars.direction = "W"
      
      break; 
  
    case "W":
      roverMars.direction = "N"
        
      break;
  }
  console.log("La nueva direccion es:" , roverMars.direction)

}

function moveForward(roverMars){
  console.log("moveForward was called");
  var inLimits = false;                                     // in order to validate if the rover is inside the limits

  switch (roverMars.direction) {
    case "N":
      if (roverMars.y <=9 && roverMars.y > 0){                // if the rover is in the limit, can't go forward
        if (grid[roverMars.y - 1][roverMars.x] == null){      //if there is not an obstacle, "O", or another Rover "R", in the future position
          grid[roverMars.y][roverMars.x] = null;               // free the actual position in the grid
          roverMars.y -= 1;                                     //move one step
          inLimits = true;                                      // the rover is inside the limits
          grid[roverMars.y][roverMars.x] = "R";            // next position is going to be fill
        }
        else {
          if (grid[roverMars.y - 1][roverMars.x]=="O"){
          console.log("No se puede avanzar debido a un obstáculo en el camino donde se dirige")         // the rover can't go forward. there is an obstacle
          }
          else {console.log("No se puede avanzar debido a que hay otro Rover en el camino");            // the rover can't go forward. there is another rover
          }  
        }                                                                                          
      }
      else {
        console.log("Ha llegado al límite del terreno");       // the rover can't go forward
      }
     
     break;
    case "E":
      if (roverMars.x <9 && roverMars.x >= 0){
        if (grid[roverMars.y][roverMars.x + 1] == null){
          grid[roverMars.y][roverMars.x] = null;
          roverMars.x += 1;
          inLimits = true;
          grid[roverMars.y][roverMars.x] = "R";

        }
        else {
          if (grid[roverMars.y][roverMars.x + 1]=="O"){
            console.log("No se puede avanzar debido a un obstáculo en el camino donde se dirige")         
            }
            else {console.log("No se puede avanzar debido a que hay otro Rover en el camino");            
            }  
          }     
      }
      else {
        console.log("Ha llegado al límite del terreno");
      }
    
     break;
    case "S":
      if (roverMars.y <9 && roverMars.y >= 0){
        if (grid[roverMars.y + 1][roverMars.x] == null){
          grid[roverMars.y][roverMars.x] = null;
          roverMars.y += 1;
          inLimits = true;
          grid[roverMars.y][roverMars.x] = "R";

        }
        else {
          if (grid[roverMars.y + 1][roverMars.x]=="O"){
            console.log("No se puede avanzar debido a un obstáculo en el camino donde se dirige")         
            }
            else {console.log("No se puede avanzar debido a que hay otro Rover en el camino");            
            }  
          } 

      }
      else {
        console.log("Ha llegado al límite del terreno");
      }
    
     break;
    case "W":
      if (roverMars.x <=9 && roverMars.x > 0){
        if (grid[roverMars.y][roverMars.x - 1] == null){
          grid[roverMars.y][roverMars.x] = null;
          roverMars.x -= 1;
          inLimits = true;
          grid[roverMars.y][roverMars.x] = "R";

        }
        else {
          if (grid[roverMars.y][roverMars.x - 1]=="O"){
            console.log("No se puede avanzar debido a un obstáculo en el camino donde se dirige")         
            }
            else {console.log("No se puede avanzar debido a que hay otro Rover en el camino");            
            }  
          } 

      }
      else {
        console.log("Ha llegado al límite del terreno");
      }
    
     break;  
 
 } 
  console.log("Posición actual:", [roverMars.x, roverMars.y]);                     // actual position is printed in an array  
  if (inLimits) {roverMars.travelLog.push([roverMars.x, roverMars.y])}             // if there has been a movement, the position (inside an array) is saved in the travelLog array
  console.log("Todas las posiciones hasta ahora han sido:", roverMars.travelLog);  // travelLog is printed

}

function moveBackward(roverMars){
  console.log("moveBackward was called");                               
  var inLimits = false;                                                  // in order to validate if the rover is inside the limits


  switch (roverMars.direction) {
    case "N":
      if (roverMars.y <9 && roverMars.y >= 0){                          // if the rover is in the limit, can't go backward
        if ( grid[roverMars.y + 1][roverMars.x] == null){               //if there is not an obstacle, "O", or another Rover "R", in the future position
          grid[roverMars.y][roverMars.x] = null;                        // free the actual position in the grid
          roverMars.y += 1;                                              //move one step
          inLimits = true;                                               // the rover is inside the limits
          grid[roverMars.y][roverMars.x] = "R";                     // next position is going to be fill

        }  
        else {
          if (grid[roverMars.y + 1][roverMars.x]=="O"){
            console.log("No se puede avanzar debido a un obstáculo en el camino donde se dirige")         // the rover can't go backward. there is an obstacle
            }
            else {console.log("No se puede avanzar debido a que hay otro Rover en el camino");            // the rover can't go forward. there is another rover
            }  
          } 
                                              

      }
      else {
        console.log("Ha llegado al limite del terreno");                  // the rover can't go backward
      }
    
    
      break;
    case "E":
      if (roverMars.x <=9 && roverMars.x > 0){
        if (grid[roverMars.y][roverMars.x - 1] == null){
          grid[roverMars.y][roverMars.x] = null;
          roverMars.x -= 1;
          inLimits = true;
          grid[roverMars.y][roverMars.x] = "R";

        }
        else {
          if (grid[roverMars.y][roverMars.x - 1]=="O"){
            console.log("No se puede avanzar debido a un obstáculo en el camino donde se dirige")         
            }
            else {console.log("No se puede avanzar debido a que hay otro Rover en el camino");            
            }  
          } 
      }
      else {
        console.log("Ha llegado al limite del terreno");
      }
    
      break;
    case "S":
      if (roverMars.y <=9 && roverMars.y > 0){
        if (grid[roverMars.y - 1][roverMars.x] == null){
          grid[roverMars.y][roverMars.x] = null;
          roverMars.y -= 1;
          inLimits = true;
          grid[roverMars.y][roverMars.x] = "R";

        }
        else {
          if (grid[roverMars.y - 1][roverMars.x]=="O"){
            console.log("No se puede avanzar debido a un obstáculo en el camino donde se dirige")         
            }
            else {console.log("No se puede avanzar debido a que hay otro Rover en el camino");            
            }  
          } 
      }
      else {
        console.log("Ha llegado al limite del terreno");
      }
    
     
      break;
    case "W":
      if (roverMars.x <9 && roverMars.x >= 0){
        if (grid[roverMars.y][roverMars.x + 1] == null){
          grid[roverMars.y][roverMars.x] = null;
          roverMars.x += 1;
          inLimits = true;
          grid[roverMars.y][roverMars.x] = "R";

        }
        else {
         if (grid[roverMars.y][roverMars.x + 1]=="O"){
          console.log("No se puede avanzar debido a un obstáculo en el camino donde se dirige")         
          }
          else {console.log("No se puede avanzar debido a que hay otro Rover en el camino");            
          }  
        } 
      }
      else {
        console.log("Ha llegado al limite del terreno");
      }   
      break;   
 }
  console.log("Posición actual:", [roverMars.x, roverMars.y]);                          // actual position is printed in an array 
  if (inLimits) {roverMars.travelLog.push([roverMars.x, roverMars.y])}                  // if there has been a movement, the position (inside an array) is saved in the travelLog array
  console.log("Todas las posiciones hasta ahora han sido:", roverMars.travelLog);       // travelLog is printed

}

function inputCommands (input, roverMars) {
  for (var j=0;j<input.length;j++) {
    if (input[j] != "f" && input[j] != "b" && input[j] != "l" && input[j] != "r" ) {              // intput string must contain "f", "b", "l" or "r"
      var warning = "Por favor, introduzca un comando valido. Solo debe contener 'f', 'b', 'l' o 'r'"
      return warning;
    }
 
  }


  for (var i=0;i<input.length;i++) {
    switch (input[i]) {

      case "f":
        moveForward(roverMars);
        break;

      case "b":
        moveBackward(roverMars);
        break;

      case "l":
        turnLeft(roverMars);
        break;

      case "r":
        turnRight(roverMars);
        break;    
      }
  }
}
  


function gridRover(numberOfObstacles){                  //
 
    for (var i = 1; i <= numberOfObstacles; i++){
      var row = getRandomNum();
      var column = getRandomNum();
      grid[row][column] = "O";
    }
  console.log(grid);  
  }






function getRandomNum(){
  return Math.floor(Math.random() * 10);
}



var rover = {

  direction: "N",
  x: 0,
  y: 0,
  travelLog: []
}



var rover2 = {

  direction: "N",
  x: 0,
  y: 0,
  travelLog: []
}




 var grid = [
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
]; 
