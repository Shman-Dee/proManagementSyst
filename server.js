require('dotenv').config();
const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const session = require('express-session');
const sequelize = require("./config");
const helpers = require('./utils/helpers');
const hbs = exphbs.create({helpers});
const routes = require('./routes');

const app = express();
const PORT = 3001 || process.env.PORT;

const sessionSettings = {
	secret: process.env.SESSION_SECRET,
	resave: false,
	saveUninitialized: false,
};

app.use(express.static(path.join(__dirname, 'public')));
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session(sessionSettings));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
});