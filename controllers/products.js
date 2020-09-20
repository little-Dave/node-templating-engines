const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  res.render("add-product", {
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

exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render("shop/product-list", {
      products: products, 
      docTitle: "Shop", 
      path: "/",
      hasProducts: !!(products.length),
      shop: true,
      productCSS: true
    });
  });
}