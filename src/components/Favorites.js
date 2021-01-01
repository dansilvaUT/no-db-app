import Favorite from './Favorite';

const Favorites = props => {
    return (
        <section>
            {props.favorites.map((person, index) => {
                return (
                    <Favorite
                        key={index}
                        person={person}
                    />
                )
            })}

        </section>
    )
}

export default Favorites;