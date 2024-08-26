import React from 'react';
import './App.css';
import NewComp from './Components/NewComp';

class App extends React.Component {

  styles={
    fontStyle: "bold",
    color: "teal"
  };
  parastyles = {
    fontstyle: "italic",
    color: "purple"
  };

  render(){
    return (
      <div className = "App">
      <h1 style = {this.styles}> Sakshi's Blogs </h1>
      <p style = {this.parastyles}>Hello and welcome to my State app</p>
      <NewComp />
      </div>
    );
  }
}

export default App;
