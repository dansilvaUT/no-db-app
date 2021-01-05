import { Component } from 'react';
import './Character.css';

class Character extends Component {
    addCharacter = () => {
        const { person } = this.props;
        let character = {
            name: person.name,
            image: person.img,
            status: person.status
        }

        this.props.add(character);
    }

    render() {
        return (
            <section className="character-container">
                <h2>{this.props.person.name}</h2>
                <img src={this.props.person.img} alt={this.props.person.name} className="character-image" />
                <div className="character-properties">
                    <h5>Nickname: <span>{this.props.person.nickname}</span></h5>
                    <h5>Status: <span className={this.props.person.status === 'Deceased' ? "deceased" : "alive"}>
                        {this.props.person.status}</span>
                    </h5>
                    <h4>Appearances:</h4>
                    <ul className="season-list">
                        {this.props.person.appearance.map((season, index)=>(
                            <li key={index}>Season - {season}</li>
                        ))}
                    </ul>
                </div>
                <button className="add-character" onClick={this.addCharacter}>Add to Favorites</button>
                <button className="next-btn" onClick={() => this.props.get()}>Next Character</button>
            </section>
        )
    }
}

export default Character;

