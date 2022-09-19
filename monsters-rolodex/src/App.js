import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: 'redux',
    };
  }
  render() {
    return (
      <div className="App">
        <h4>hi, {this.state.name}</h4>
        <button
          onClick={() => {
            this.setState({ name: 'react' });
            console.log(this.state);
          }}
        >
          change name
        </button>
      </div>
    );
  }
}

export default App;
