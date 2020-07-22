const fs = require('fs');
const path = require('path');
const products = [];
module.exports = class Product {
  constructor(title){
    this.title = title;
  }

  save() {
    const productsDataPath = path.join(__dirname, "../", "data", "products.json");
    console.log(productsDataPath);
  }

  static fetchAll() {
    return products;
  }
}