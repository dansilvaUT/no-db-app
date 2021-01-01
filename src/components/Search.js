import { Component } from 'react';
import Character from './Character';
import axios from 'axios';
import './Search.css';

class Search extends Component {
    constructor() {
        super();
        this.state = {
            character: [],
            isLoading: true
        }
    }

    componentDidMount() {
        this.getCharacter();
    }

    getCharacter = () => {
        axios.get('/api/get-character')
            .then(res => this.setState({ character: res.data[0], isLoading: false }))
            .catch(err => console.log(`Error: ${err.message}`));
    }

    render() {
        return (
            <section>
                {this.state.isLoading ?
                    <div className="search-placeholder">Searching.....</div>
                    : this.state.character.map((person, index) => {
                        return (
                            <Character
                                key={index}
                                person={person}
                                add={this.props.add}
                                get={this.getCharacter}
                            />)
                    })}
            </section>
        )
    }
}

export default Search;