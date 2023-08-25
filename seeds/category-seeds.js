// seeds/category-seeds.js
const { Category } = require('../models');

const categoryData = [
  {
    category_name: 'Electronics',
  },
  {
    category_name: 'Clothing',
  },
  
];
//creates table
const seedCategories = () => Category.bulkCreate(categoryData);
//exports seed categories
module.exports = seedCategories;
