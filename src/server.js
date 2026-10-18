const app = require('./app.js');
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server listening for requests on PORT ${PORT}`);
})