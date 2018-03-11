Instrucciones:
Lo primero hay que crear los obstáculos con su correspondiente función: 

createObstacles(numberOfObstacles) Sirve para crear obstáculos en el grid que está predefinido. Hay que pasar como argumento el número de obstáculos que queremos crear.

Podemos también introducir comandos para mover los rover:

inputCommands (input, roverMars)  Sirve para introducir una serie de comandos. Hay que pasar como argumento una cadena de caracters que incluyan las siguientes letras: "r", para girar a la derecha. "l", para girar a la izquierda. "f" para avanzar hacia adelante. "b", para avanzar hacia atrás. Y un rover al que queremos mover. Ejemplo: inputCommands("rfffbbblff", rover)


turnLeft(roverMars)  Sirve para girar a la izquierda. Hay que pasar como argumento el rover al que queremos girar.

turnRight(roverMars) Sirve para girar a la derecha. Hay que pasar como argumento el rover al que queremos girar.

moveForward(roverMars)  Sirve para mover hacia adelante el Rover. Hay que pasar como argumento el rover que queremos mover.

moveBackward(roverMars)  Sirve para mover hacia atrás el Rover. Hay que pasar como argumento el rover que queremos mover.

