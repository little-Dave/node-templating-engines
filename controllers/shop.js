const Product = require('../models/product');

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

exports.getIndex = (req, res, next) => {
  Product.fetchAll(products => {
    res.render("shop/index", {
      products: products, 
      docTitle: "Shop", 
      path: "/",
      hasProducts: !!(products.length),
      shop: true,
      productCSS: true
    });
  });
}