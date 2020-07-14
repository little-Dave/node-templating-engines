const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
// const handlebars = require('express-handlebars');

const app = express();

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

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

app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).render("404", {
        docTitle: "Page Not Found",
        path: undefined
    });
});
 
app.listen(3000);
