// src/App.js
import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Quotes from "./Quotes";
import Lamp from "./Lamp";

class App extends Component {


  constructor(props) {
    super(props);
    this.state = {
      working: props.working
    };
  }
  handleClick = () => {
    this.setState({ working: !this.state.working });
  }


  render() {
    const pause = this.state.working ? 'working' : 'onBreak';

    return (
      <div className="App">
        <header className="App-header">
          <h1>Simpsons Quotes</h1>
          <img src={logo} className={`App-logo ${pause}`} alt="logo" />
          {/* <h1 className="App-title">Simpsons Quotes</h1> */}
        </header>
        <button
          className={pause}
          onClick={
            this.handleClick
          }>
          {pause.toUpperCase()}
        </button>
        <Quotes />
        <div className="Lamp">

        </div>
      </div>
    );
  }
}

export default App;