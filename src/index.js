import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            value: null
        };
    }
    render() {
        if (this.state.value === 'X') {
            return (
                <button
                    className="square"
                    onClick={() => this.setState({value : null})}
                >
                    {this.state.value}
                </button>
            );
        }
        if (this.state.value === '/') {
            return (
                <button
                    className="square"
                    onClick={() => this.setState({value : 'X'})}
                >
                    {this.state.value}
                </button>
            );
        }
        return (
            <button
                className="square"
                onClick={() => this.setState({value : '/'})}
            >
                {this.state.value}
            </button>
        );
    }
  }
  
  class Board extends React.Component {
    renderSquare(i) {
      return <Square value={i} />;
    }
  
    render() {
      const status = 'Player: ROSSTAIL';
  
      return (
        <div>

          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(1)}
            {this.renderSquare(2)}
            {this.renderSquare(3)}
          </div>
          <div className="board-row">
            {this.renderSquare(4)}
            {this.renderSquare(5)}
            {this.renderSquare(6)}
          </div>
          <div className="board-row">
            {this.renderSquare(7)}
            {this.renderSquare(8)}
            {this.renderSquare(9)}
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
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }
  
  // ========================================
  
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );
  