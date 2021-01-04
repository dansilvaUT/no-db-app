import Favorite from './Favorite';
import './Favorites.css';

const Favorites = props => {
    console.log(props)
    return (
        <section>
            {props.favorites.length === 0 ? <div></div>
                :
                <section>
                    <h1>My Favorites</h1>
                    <div className="favorites-container">
                        {props.favorites.map((person, index) => {
                            return (
                                <Favorite
                                    key={index}
                                    person={person}
                                    edit={props.edit}
                                    delete={props.delete}
                                />
                            )
                        })}
                    </div>
                </section>
            }
        </section>
    )
}

export default Favorites;