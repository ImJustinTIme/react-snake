import React, { Component, Fragment}  from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  
  
  //init state 
  this.state = {
    rows: 10,
    cols: 10,
    grid: [],

  };
  
  const grid = [];
for (let row = 0; row < this.state.rows; row++){
  for (let col = 0; col < this.state.cols; col++){
    grid.push({
      row,
      col,
    })
  }
}
this.ListeningStateChangedEvent({ grid: grid})

render () {
  const gridITems = this.state.grid.map((grid) => {
    return <div
    key={grid.row.toString() + '-' + grid.col.toString()}
    className="grid-item"></div>
  })
return (
  <div className="snake-container">
    <div className="grid">{gridITems}</div>
  </div>
)
}

}
export default withRouter(App);