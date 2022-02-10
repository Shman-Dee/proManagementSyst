const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const sequelize = require("./config");
const hbs = exphbs.create({});
const routes = require('./routes');

const app = express();
const PORT = 3001 || process.env.PORT;

app.use(express.static(path.join(__dirname, 'public')));
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
});