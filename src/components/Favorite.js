import { Component } from 'react';

class Favorite extends Component {
    render() {
        const { person } = this.props;
        return (
            <section>
                <h3>{person.name}</h3>
                <img src={person.image} alt={person.name} className="character-image" />
                <h4>Status: {person.status}</h4>
            </section>
        )
    }
}

export default Favorite;