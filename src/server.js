const dotenv = require('dotenv');
const app = require('./app.js');

dotenv.config();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server listening for requests on PORT ${PORT}`);
})