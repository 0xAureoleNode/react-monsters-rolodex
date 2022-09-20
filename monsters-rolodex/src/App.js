import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: '',
    };
    console.log('constructor');
  }
  componentDidMount() {
    console.log('lifeCycle');
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          },
          () => {
            console.log(this.state);
          }
        )
      );
  }
  render() {
    console.log('render');
    const filteredMonsters = this.state.monsters.filter((monster) =>
      monster.name.toLowerCase().includes(this.state.searchField)
    );
    return (
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholder="search monsters"
          onChange={(event) => {
            const searchField = event.target.value.toLocaleLowerCase();

            this.setState(() => {
              return { searchField };
            });
          }}
        />
        {filteredMonsters.map((monster) => (
          <div key={monster.id}>
            <h4>{monster.name}</h4>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
