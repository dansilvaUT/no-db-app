import { Component } from 'react';
import Header from './components/Header';
import Search from './components/Search';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      favoriteCharacters: []
    }
  }

  // componentDidMount() {
  //   axios.get('/api/favorite-character')
  //   .then(res=> this.setState({favoritecharacters}))
  // }

  addCharacter = character => {
    axios.post('/api/favorite-character', { character: character })
      .then(res => this.setState({ favoriteCharacters: res.data }))
      .catch(err => console.log(`Error: ${err.message}`))
  }

  render() {
    console.log(this.state.favoriteCharacters)
    return (
      <div className="App">
        <Header />
        <Search add={this.addCharacter} />
      </div>
    );
  }

}

export default App;
