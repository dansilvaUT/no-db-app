import Favorite from './Favorite';

const Favorites = props => {
    return (
        <section>
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
        </section>
    )
}

export default Favorites;