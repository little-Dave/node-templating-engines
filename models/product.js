const fs = require('fs');
const path = require('path');

const productsDataPath = path.join(__dirname, "../", "data", "products.json");

module.exports = class Product {
  constructor(title){
    this.title = title;
  }

  save() {
    fs.readFile(productsDataPath, (err, fileContent) => {
      let products = [];
      if (!err) {
        products = JSON.parse(fileContent);
      }
      products.push(this);
      fs.writeFile(productsDataPath, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }

  static fetchAll() {
    fs.readFile(productsDataPath, (err, fileContent) => {
      if (err) {
        return err;
      }
      return(JSON.parse(fileContent));
    });
  }
}