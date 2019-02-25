import React, { Component } from 'react';
import data from '../data';

export default class Quotes extends Component {
  state = {
    quote: '',
    author: ''
  }

  generateRandomQuote = () => {
    const randomNumber = Math.floor(Math.random() * (data.length))
    this.setState({
      quote: data[randomNumber].quote,
      author: data[randomNumber].author
    })
  }

  componentDidMount() {
    this.generateRandomQuote()
  }

  render() {
    console.log(this.state)
    return (
      <div>
            <h1 className = 'title'>Welcome To A Stoic Quotes Generator</h1>
        <div className = 'container'>
          <div className = 'effect effect-c'>
            <p className = 'effect__heading'>{this.state.quote}</p>
            <h4 className = 'effect__subheading'><cite>{this.state.author}</cite></h4>
          </div>
        </div>
        <div className = 'button-container-1'>
          <span className = 'mas'>New Quote</span>
          <button 
            onClick = {this.generateRandomQuote} 
            id = 'work' 
            type = 'button'
            name = 'Hover'
            >New Quote</button>
        </div>
      </div>
    )
  }
}
