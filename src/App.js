import React, { Component } from 'react';
import LaunchProgram from "./Components/LaunchProgram";

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      launchPrograms: []
    }
  }

  componentDidMount() {
    this.fetchLaunchProgram();
  }

  fetchLaunchProgram = () => {
    fetch(`https://api.spacexdata.com/v3/launches?limit=100`)
    .then(res => res.json())
    .then(launchPrograms => this.setState({launchPrograms}))
  }


  render() {
    const {launchPrograms} = this.state;
      return (
        <div className="program-grid">
        {launchPrograms.map((launchProgram,index) => (
          <LaunchProgram key={index} {...launchProgram} />
        ))}
        </div>
      )
  }
}
  

export default App;
