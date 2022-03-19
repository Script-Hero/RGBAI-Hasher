import './App.css';
import React from 'react';

let md5 = require('md5');

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      "input":""
    }

    this.onChange = this.onChange.bind(this);
    this.validate = this.validate.bind(this);
  }

  onChange(e){
    this.setState({input:e.target.value})
  }

  validate(){
    // must be all integer, 6 length
    let isnum = /^\d+$/.test(this.state.input); // test if all integers

    return (isnum && this.state.input.length == 6);
  }

  render(){
    return (
      <div id="body">
        <div id="input-box-container"><input autofocus id='input-box' placeholder='Enter your Student ID' onChange={this.onChange}></input></div>

        <div id="output-container">
          <h1 id="output" tooltip='Click to copy' onClick={() => {navigator.clipboard.writeText(md5(this.state.input))}}>{this.validate() ? md5(this.state.input) : ""}</h1>
        </div>
      </div>
    )
  }
}
