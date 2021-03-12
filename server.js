const express = require('express');
//const path = require('path');
const nodemailer = require('nodemailer')

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));



require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));