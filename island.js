function getNeighbors(row, col, graph) {

  // Check top

  // Check bottom

  // Check left

  // Check right

  // Return neighbors

  // Your code here 
  let startNode = [row, col];
  let up = [row-1, col];
  let bottom = [row+1, col];
  let left = [row, col-1];
  let right = [row, col+1];
  let check = [up, bottom, left, right]
  let res = [];

  for (let i = 0; i < check.length; i++) {
    let el = check[i];
    if (el[0] >= 0 && el[1] >= 0 && el[0] <= graph.length-1 && el[1] <= graph[0].length-1 && graph[el[0]][el[1]]>=1) {
        res.push(el);
    }
    
  }

return res;
  
}


function islandSize(row, col, graph) {

  // Create a visited set to store visited nodes

  // Create a stack, put the starting node in the stack

  // Put the stringified starting node in visited

  // Initialize size to 0

  // While the stack is not empty,

    // Pop the first node

    // DO THE THING (increment size by 1)

    // Then push all the UNVISITED neighbors on top of the stack
    // and mark them as visited
    // HINT: This is what your helper function `getNeighbors` is for
    // HINT: Remember, you're storing your visited nodes as strings!

  // return size

  // Your code here 
  

}

module.exports = [getNeighbors, islandSize];


matrix = [
  [1,1,1,0,0],
  [0,1,1,0,1],
  [0,1,1,0,1],
]

matrix2 = [
  [0, 0, 0],
  [0, 1, 0],
  [0, 0, 0],
]

console.log(getNeighbors(1, 1, matrix2))//.to.have.length(0);
console.log(getNeighbors(1, 1, matrix))//.to.have.deep.members([[0, 1], [1, 2], [2, 1]]);
console.log(getNeighbors(0, 0, matrix))//.to.have.deep.members([[0, 1]]);
console.log(getNeighbors(2, 4, matrix))//.to.have.deep.members([[1, 4]]);
console.log(getNeighbors(1, 0, matrix))//.to.have.deep.members([[0, 0], [1, 1]]);
