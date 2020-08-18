import React from "react";
import { calculateWinner } from "./WinCombo";
import "./components/style.css";

function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(100).fill(null),
      xNext: true
    };
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xNext ? "X" : "O";
    this.setState({
      squares: squares,
      xNext: !this.state.xNext
    });
  }
  renderSquare(i) {
    return (
      <Square
        key={i}
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }

  render() {
    const winner = calculateWinner(this.state.squares);
    let status;
    if (winner) {
      status = "Winner: " + winner;
    } else {
      status = "Next player: " + (this.state.xNext ? "X" : "O");
    }

    return (
      <div>
        <div className="status">{status}</div>
        <button
          className="button"
          onClick={() =>
            this.setState({
              squares: Array(100).fill(null),
              xNext: true
            })
          }
        >
          New Game
        </button>
        <div className="board-row">
          {Array(10)
            .fill(0)
            .map((x, y) => this.renderSquare(x + y))}
        </div>
        <div className="board-row">
          {Array(10)
            .fill(10)
            .map((x, y) => this.renderSquare(x + y))}
        </div>
        <div className="board-row">
          {Array(10)
            .fill(20)
            .map((x, y) => this.renderSquare(x + y))}
        </div>
        <div className="board-row">
          {Array(10)
            .fill(30)
            .map((x, y) => this.renderSquare(x + y))}
        </div>
        <div className="board-row">
          {Array(10)
            .fill(40)
            .map((x, y) => this.renderSquare(x + y))}
        </div>
        <div className="board-row">
          {Array(10)
            .fill(50)
            .map((x, y) => this.renderSquare(x + y))}
        </div>
        <div className="board-row">
          {Array(10)
            .fill(60)
            .map((x, y) => this.renderSquare(x + y))}
        </div>
        <div className="board-row">
          {Array(10)
            .fill(70)
            .map((x, y) => this.renderSquare(x + y))}
        </div>
        <div className="board-row">
          {Array(10)
            .fill(80)
            .map((x, y) => this.renderSquare(x + y))}
        </div>
        <div className="board-row">
          {Array(10)
            .fill(90)
            .map((x, y) => this.renderSquare(x + y))}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
      </div>
    );
  }
}

export default Game;
