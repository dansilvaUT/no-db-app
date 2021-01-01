const favoriteCharacters = [];
let id = 1;

module.exports = {
    getCharacters: (req, res) => {
        res.status(200).send(favoriteCharacters);
    },

    addCharacter: (req, res) => {
        const { character } = req.body;

        character.id = id;
        id++;

        favoriteCharacters.push(character);
        res.status(200).send(favoriteCharacters);
    },

    editCharacter: (req, res) => {
        const { id } = req.params;
        const { name } = req.body;

        //ASK Q WHY this breaks when use the {} in the conditional
        let character = favoriteCharacters.find(favorite => favorite.id === + id);
        character.name = name;
        res.status(200).send(favoriteCharacters)
    },

    deleteCharacter: (req, res) => {
        const { id } = req.params;
        let index = favoriteCharacters.findIndex(character => character.id === +id);

        favoriteCharacters.splice(index, 1);

        res.status(200).send(favoriteCharacters);
    }
}