const articles = require('../data/articleProfiles');

const getArticles = (req, res) => {
    console.log('request sent')
    res.status(200).json({ success: true, articles });
}

module.exports = {
    getArticles
}