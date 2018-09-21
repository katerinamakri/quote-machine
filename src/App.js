import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      quote:'',
      author:'',
      backgroundColor:'#d35400',
      color:'#d35400'
    }

    this.fetchQuote = this.fetchQuote.bind(this)
    this.getData = this.getData.bind(this)
    this.fetchQuote = this.fetchQuote.bind(this)
    this.changeColor = this.changeColor.bind(this)
  }


  componentDidMount() {
    this.fetchQuote(this.getData);    
  }

  componentWillMount(){
    document.body.style.backgroundColor = this.state.backgroundColor
  }

  fetchQuote (getData) {

    getData( `https://andruxnet-random-famous-quotes.p.mashape.com/` )
    .then((data) => {
      // console.log("fetched data", data);

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

  newQuote (fetchQuote, getData, changeColor){
    this.fetchQuote(getData);
    this.changeColor();
    // console.log ( this.state.backgroundColor)
  }

  changeColor (){
    const colorArray = ['#db0a5b', '#d91e18', '#cf000f', '#c0392b', '#96281b', '#736598','#8c14fc','#a537fd', '#9b59b6',
    '#913d88', '#674172', '#4d13d1', '#336e7b', '#013243', '#2c3e50', '#24252a', '#22a7f0',
    '#2574a9', '#3a539b', '#1f3a93', '#5333ed', '#1e824c', '#2e3131']
    let changeColorRandomly = Math.floor(Math.random() * 24)
    
    this.setState({
      backgroundColor: colorArray[changeColorRandomly],
    })
  }

  render() {

    document.body.style.backgroundColor = this.state.backgroundColor

    return (
      <div className="App" >
        <div className="box" id="quote-box">
          <div>
            <p id="text" style={{color:this.state.backgroundColor}} ><i className="fas fa-quote-left"></i> {this.state.quote}</p>
            <p id="author" style={{color:this.state.backgroundColor}} >- {this.state.author} -</p>
          </div>
          <div className="buttons-container">
            <a  href="https://twitter.com/intent/tweet" className="twitter" id="tweet-quote"> 
              <i className="fab fa-twitter-square fa-2x" style={{color:this.state.backgroundColor}}></i> 
            </a>        
            <button className="next-quote" id="new-quote" style={{backgroundColor:this.state.backgroundColor}} onClick={() => this.newQuote(this.fetchQuote, this.getData) }>New Quote</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
