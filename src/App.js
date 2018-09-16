import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)

  }

  render() {
    return (
      <div className="App">
        <div className="box" id="quote-box">
          <p id="text">quote..</p>
          <p id="author">author</p>
          <div className="buttons-container">
            <a href="twitter.com/intent/tweet" id="tweet-quote"> Twitter </a>        
            <button id="new-quote">New Quote</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
