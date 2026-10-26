const express = require('express');
const articlesRouter = require('./routes/articlesRoute');
const cors = require('cors');
const app = express();

const corsOptions = {
    origin: [
        "https://amend-america-amendments-page.onrender.com",
        "http://localhost:5173"
    ],
    optionsSuccessStatus: 200
}

app.use(express.json());
app.use(cors(corsOptions));
app.use('/api/articles', articlesRouter);

app.get('/', (req, res) => {
    res.status(200).send('Home');
})

module.exports = app;