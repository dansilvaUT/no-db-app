import { Component } from 'react';
import './Favorite.css';

class Favorite extends Component {
    constructor() {
        super();
        this.state = {
            isEditing: false,
            input: ''
        }
    }

    handleNameChange = (value) => {
        this.setState({ input: value });
    }

    toggleEdit = () => {
        if (this.state.isEditing) {
            this.setState({ isEditing: false });
        } else {
            this.setState({ isEditing: true });
        }
    }

    editName = id => {
        this.props.edit(id, this.state.input);
        this.toggleEdit();
    }

    deleteCharacter = id => {
        this.props.delete(id);
    }

    render() {
        const { person } = this.props;
        return (
            <section className="favorite-container">
                <h3>{person.name}</h3>
                <img src={person.image} alt={person.name} className="favorite-image" />
                <h4>Status: {person.status}</h4>
                {this.state.isEditing
                    ? (<section>
                        <input type="text" name={this.state.input} onChange={e => this.handleNameChange(e.target.value)} />
                        <button onClick={() => this.editName(person.id)} className="change-btn">Change Picture</button>
                    </section>)
                    : (<section>
                        <button onClick={this.toggleEdit} className="edit-btn">Edit Picture</button>
                        <button onClick={() => this.deleteCharacter(person.id)} className="delete-btn">Delete from Favorites</button>
                    </section>)}
            </section>
        )
    }
}

export default Favorite;