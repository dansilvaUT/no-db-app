import { Component } from 'react';

class Character extends Component {
    addCharacter = () => {
        const { person } = this.props;
        let character = {
            name: person.name,
            image: person.img
        }

        this.props.add(character);
    }
    render() {
        return (
            <section>
                <h3>{this.props.person.name}</h3>
                <img src={this.props.person.img} alt={this.props.person.name} className="character-image" />
                <h5>Nickname: <span>{this.props.person.nickname}</span></h5>
                <h5>Status: <span>{this.props.person.status}</span></h5>
                <button onClick={this.addCharacter}>Add to Favorites</button>
            </section>
        )
    }
}

export default Character;

