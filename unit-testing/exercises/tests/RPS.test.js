const rps = require('../RPS.js');

describe("whoWon", function() {

    test("returns 'TIE!' if player1 and player2 are equal", function(){
        let output = rps.whoWon('rock', 'rock');
        expect(output).toEqual('TIE!');
    });

    test("returns 'Player 2 wins!' if player1 picks rock and player2 picks paper", function() {
        let output = rps.whoWon('rock', 'paper');
        expect(output).toEqual('Player 2 wins!');
    });

    test("returns 'Player 2 wins!' if player1 picks paper and player2 picks scissors", function() {
        let output = rps.whoWon('paper', 'scissors');
        expect(output).toEqual('Player 2 wins!');
    });

    test("returns 'Player 2 wins!' if player1 picks scissors and player2 picks rock", function() {
        let output = rps.whoWon('scissors', 'rock');
        expect(output).toEqual('Player 2 wins!');
    });

    test("returns 'Player 1 wins!' if player1 has the better choice", function() {
        let output = rps.whoWon('rock', 'scissors');
        expect(output).toEqual('Player 1 wins!');
    });

    test("returns request to enter 'rock', 'paper' or 'scissors' as argument", function() {
        let output = rps.whoWon('something', 'random');
        expect(output).toEqual("Please enter 'rock', 'paper', or 'scissors' for both arguments");
    });

});
