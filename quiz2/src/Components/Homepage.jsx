import React, { Component } from 'react'
import '../Components/game.css'

export default class Homepage extends Component {

  render() {
    return (
      <div className='home-body'>
        <h1>Quiz App</h1>
        <button className='play-btn'>Play</button>
      </div>
    )
  }
}
