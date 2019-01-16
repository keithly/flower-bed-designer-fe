import React, { Component } from 'react';
import './App.css';
import Axios from 'axios';

class App extends Component {
    constructor (props) {
        super(props)
        this.state = {plants: []}
    }

    async componentDidMount() {
      const request = await Axios.get('http://localhost:5000/plant/')
      console.log(request.data)
      this.setState({ plants: request.data})
    }

    render() {
    return (
      <div className="App">
        <header className="App-header">
          {this.state.plants.map(plant => (
            <h2 key={plant.plant_id}>{plant.common_name}</h2>
          ))}      
        </header>
      </div>
    );
  }
}

export default App;
