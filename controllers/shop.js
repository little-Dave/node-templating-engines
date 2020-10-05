const Product = require('../models/product');

exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render("shop/product-list", {
      products: products, 
      docTitle: "All Products", 
      path: "/products"
      // hasProducts: !!(products.length),
      // shop: true,
      // productCSS: true
    });
  });
}

exports.getIndex = (req, res, next) => {
  Product.fetchAll(products => {
    res.render("shop/index", {
      products: products, 
      docTitle: "Shop", 
      path: "/"
      // hasProducts: !!(products.length),
      // shop: true,
      // productCSS: true
    });
  });
}

exports.getCart = (req, res, next) => {
  res.render("shop/cart", {
    path: "/cart",
    docTitle: "Your Cart"
  })
}

exports.getCheckout = (req, res, next) => {
  res.render("shop/checkout", {
    path: "/checkout",
    docTitle: "Checkout"
  })
}