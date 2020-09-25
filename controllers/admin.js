const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  res.render("admin/add-product", {
    docTitle: "Add Product", 
    path: "/admin/add-product",
    addProduct: true,
    productCSS: true,
    formsCSS: true
  });
}

exports.postAddProduct = (req, res, next) => {
  new Product(req.body.title).save();
  res.redirect('/');
}