// seeds/product-seeds.js
const { Product } = require('../models');

const productData = [
  {
    product_name: 'Laptop',
    price: 999.99,
    stock: 10,
    category_id: 1, // Set the appropriate category_id
  },
  {
    product_name: 'T-Shirt',
    price: 19.99,
    stock: 25,
    category_id: 2, // Set the appropriate category_id
  },
  
];
//creates table
const seedProducts = () => Product.bulkCreate(productData);
//exports seed products
module.exports = seedProducts;
