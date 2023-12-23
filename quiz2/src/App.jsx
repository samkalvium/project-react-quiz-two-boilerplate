import './App.css'
import Homepage from './Components/Homepage.jsx'
import Mainpage from './Components/Mainpage.jsx'
import Resultpage from './Components/Resultpage.jsx'
import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <>
        <div>
          {/* <Homepage /> */}
          <Mainpage />
          {/* <Resultpage /> */}
        </div>
      </>
    )
  }
}
