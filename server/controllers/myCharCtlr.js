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
    }
}