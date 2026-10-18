const articles = require('../data/articleProfiles');

const getArticles = (req, res) => {
    res.status(200).json(articles);
}

module.exports = {
    getArticles
}