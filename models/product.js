const fs = require('fs');
const path = require('path');

module.exports = class Product {
  constructor(title){
    this.title = title;
  }

  save() {
    const productsDataPath = path.join(__dirname, "../", "data", "products.json");
    fs.readFile(productsDataPath, (err, fileContent) => {
      let products = [];
      if (!err) {
        products = JSON.parse(fileContent);
      }
      products.push(this);
      fs.writeFile(productsDataPath, JSON.stringify(products), (err) => {
        console.log(err);
      });
      console.log(products);
    });
  }

  static fetchAll() {
    // return products;
  }
}