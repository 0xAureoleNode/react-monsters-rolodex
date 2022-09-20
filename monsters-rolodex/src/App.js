import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: { firstName: 'Yihua', lastName: 'Zhang' },
      company: 'basecamp',
    };
  }
  render() {
    return (
      <div className="App">
        <h4>
          hi, {this.state.name.firstName}
          {this.state.name.lastName}, I work at {this.state.company}
        </h4>
        <button
          onClick={() => {
            this.setState(
              () => {
                return {
                  name: { firstName: 'react', lastName: 'redux' },
                };
              },
              () => {
                console.log(this.state);
              }
            );
          }}
        >
          change name
        </button>
      </div>
    );
  }
}

export default App;
