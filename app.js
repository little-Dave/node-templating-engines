const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
// const handlebars = require('express-handlebars');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const error = require('./controllers/errors');

// app.engine('handlebars', handlebars({
//     layoutsDir: "views/layouts/", 
//     defaultLayout: "main-layout",
//     extname: "handlebars"
// }));
// app.set("view engine", "handlebars"); 
// app.set("view engine", "pug"); 
app.set("view engine", "ejs"); 

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(error.get404);
 
app.listen(3000);
