"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");
let inputString: string = "";
let inputLines: string[] = [];
let currentLine: number = 0;
process.stdin.on("data", function (inputStdin: string): void {
  inputString += inputStdin;
});

process.stdin.on("end", function (): void {
  inputLines = inputString.split("\n");
  inputString = "";
  main();
});

function readLine(): string {
  return inputLines[currentLine++];
}

class Player {
  name: string;
  score: number;
}

function main() {
  // Enter your code here
  // Read lines and populate array
  const size = parseInt(readLine());
  let result;
  const playersArray: Player[] = [];

  while ((result = readLine())) {
    result = result.split(" ");
    let player = new Player();
    player.name = result[0];
    player.score = parseInt(result[1]);
    playersArray.push(player);
  }

  // Sort
  playersArray.sort((a: Player, b: Player) => {
    if (a.score === b.score) {
      return b.name.localeCompare(a.name) * -1;
    }

    if (a.score > b.score) {
      return -1;
    } else if (a.score < b.score) {
      return 1;
    } else {
      return 0;
    }
  });

  // Display output
  for (let i = 0; i < size; i++) {
    console.log(playersArray[i].name + " " + playersArray[i].score);
  }
}

// https://www.hackerrank.com/challenges/ctci-comparator-sorting/problem?isFullScreen=true
