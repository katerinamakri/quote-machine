import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      quote:'',
      author:''
    }

    this.fetchQuote = this.fetchQuote.bind(this)
    this.getData = this.getData.bind(this)
    this.fetchQuote = this.fetchQuote.bind(this)
  }


  componentDidMount() {
    window.gm_authFailure = this.gm_authFailure;
    this.fetchQuote(this.getData);    
  }

  fetchQuote (getData) {

    getData( `https://andruxnet-random-famous-quotes.p.mashape.com/` )
    .then((data) => {
      console.log("fetched data", data);

      this.setState({
        quote: data[0].quote,
        author: data[0].author
      })  

    })
    .catch((error) => {
        // Code for handling errors
        console.log(error)
        alert("Sorry. There was an error retrieving the data. Please refer to the console for more information")
    });
  }

  getData(url = ``) {
    return fetch(url, {
      method: "GET",
      headers: {
            "X-Mashape-Key": "kuWkNkv49smshAmfety3VqvkCYQOp11LPdtjsnV1fJYycyD2qV",
            "Accept": "application/json"
        },
    })
    .then(response => response.json()); // parses response to JSON
  }

  refreshPage (fetchQuote, getData){
    fetchQuote(getData);

    console.log("the button works")   
  }



  render() {
    return (
      <div className="App">
        <div className="box" id="quote-box">
          <div>
            <p id="text">{this.state.quote}</p>
            <p id="author">{this.state.author}</p>
          </div>
          <div className="buttons-container">
            <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/intent/tweet" className="twitter" id="tweet-quote"> <i className="fab fa-twitter-square fa-2x"></i> </a>        
            <button className="next-quote" id="new-quote" onClick={this.fetchQuote}>New Quote</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
