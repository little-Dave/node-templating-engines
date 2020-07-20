const products = [];

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
  products.push({title: req.body.title});
  res.redirect('/');
}