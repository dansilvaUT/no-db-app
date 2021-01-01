import { Component } from 'react';
import Header from './components/Header';
import Search from './components/Search';
import Favorites from './components/Favorites';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      favoriteCharacters: []
    }
  }

  componentDidMount() {
    axios.get('/api/favorite-character')
      .then(res => this.setState({ favoriteCharacters: res.data }))
      .catch(err => console.log(`Error: ${err.message}`));
  }

  addCharacter = character => {
    axios.post('/api/favorite-character', { character: character })
      .then(res => this.setState({ favoriteCharacters: res.data }))
      .catch(err => console.log(`Error: ${err.message}`))
  }

  editCharacterName = (id, updatedName) => {
    axios.put(`/api/favorite-character/${id}`, { name: updatedName })
      .then(res => this.setState({ favoriteCharacters: res.data }))
      .catch(err => console.log(`Error: ${err.message}`));
  }


  //TODO 
  //Handle Delete
  render() {
    return (
      <div className="App">
        <Header />
        <Search add={this.addCharacter} />
        <Favorites
          favorites={this.state.favoriteCharacters}
          edit={this.editCharacterName} />
      </div>
    );
  }

}

export default App;
