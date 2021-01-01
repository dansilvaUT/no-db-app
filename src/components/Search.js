import { Component } from 'react';
import Character from './Character';
import axios from 'axios';

class Search extends Component {
    constructor() {
        super();
        this.state = {
            character: []
        }
    }

    componentDidMount() {
        this.getCharacter();
    }

    getCharacter = () => {
        axios.get('/api/get-character')
            .then(res => this.setState({ character: res.data[0] }))
            .catch(err => console.log(`Error: ${err.message}`));
    }

    render() {
        return (
            <section>
                {this.state.character.map((person, index) => {
                    return (
                        <Character
                            key={index}
                            person={person}
                            add={this.props.add}
                        />)
                })}
            </section>
        )
    }
}

export default Search;