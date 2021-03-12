
const path = require('path');

module.exports = (app) => {
    // Each of the below routes just handles the HTML page that the user gets sent to.

    // index route loads view.html
    app.get('/', (req, res) =>
        res.sendFile(path.join(__dirname, '../public/index.html'))
    );

    app.get('/contact', (req, res) =>
        res.sendFile(path.join(__dirname, '../public/contact.html'))
    );

    app.get('/portfolio', (req, res) =>
        res.sendFile(path.join(__dirname, '../public/portfolio.html'))
    );


};
