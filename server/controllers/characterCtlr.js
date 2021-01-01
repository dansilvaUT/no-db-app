const axios = require('axios');

module.exports = {
    getCharacter: (req, res) => {
        const characterArr = [];
        axios.get('https://www.breakingbadapi.com/api/character/random')
            .then(response => {
                characterArr.push(response.data)
                res.status(200).send(characterArr)
            })
            .catch(err => console.log(`Error: ${err.message}`));
    }
}