/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other





//   n Rooks
// I: a number that states how large the chess board is and how many rooks must be placed
// O: a number stating how many total successful rook placement combinations
// C:
//   1: number of rooks successfully placed must equal the number given as an input
//   2: placed rooks must not be able to "attack" any other rook (must not collide)
//   3:
// E: none

//   Overall Strategy
//   create a chess board as defined by the given number
//   place a rook in the first square,
//     then test all possible combinations of additional rook placement for the rest of the board


// Singular Solution:
// Pseudocode
//   create a 'board' array that consists of a number of rows and columns that match the given number
//   create a result variable that will start at zero and increment for each successful solution
//   create a solutions array that will house each viable solution

//   for each row
//     iterate over each column and place only one piece per row
//     place piece in current column
//     if placing piece causes any row/column collisions
//       remove piece and advance to the next column location
//     if placing piece DOES NOT cause any row/column collisions
//       move to next row and (potentially) next column
//     push the resulting board configuration to the solutions array
//     increment the result count by 1

//   return the first index of the solutions array
//   return the result count OR the length of the solutions array

//    Note:
//         * could potentially keep track of columns a piece has already been placed in so that it
//            can be skipped when iterating through columns an additional time
//         * will need a solution for allowing the iterator to "wrap" around the board and place pieces
//           in the columns skipped when starting from the 2nd+ column

// Return Count of all Solutions
// Pseudocode

window.findNRooksSolution = function(n) {
  var solution = new Board({n: n}); //[[],[],[],[]]
  console.log(solution.rows())
  if (n === 1) {
    solution.rows()[0][0] = 1;
  }

  for (var i = 0; i < solution.length; i++) {
    for (var j = 0; j < solution[i].length; j++) {
      if (!solution.hasColConflictAt(j) && !solution.hasRowConflictAt(i)) {
        solution.rows.togglePiece(i, j);
      }
    }
  }
  console.log(solution);
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
  //"[1]"
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
