const fs = require('fs');
const path = require('path');

const productsDataPath = path.join(__dirname, "../", "data", "products.json");

const getProductsFromFile = (callback) => {
  fs.readFile(productsDataPath, (err, fileContent) => {
    err ? 
      callback([]) :
      callback(JSON.parse(fileContent));
  });
}

module.exports = class Product {
  constructor(title, imageUrl, description, price){
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    getProductsFromFile(products => {
      products.push(this);
      fs.writeFile(productsDataPath, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }

  static fetchAll(callback) {
    getProductsFromFile(callback);
  }
}