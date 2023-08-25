// seeds/product-tag-seeds.js
const { ProductTag } = require('../models');

const productTagData = [
  {
    product_id: 1, // Set the appropriate product_id
    tag_id: 1, // Set the appropriate tag_id
  },
  {
    product_id: 2, // Set the appropriate product_id
    tag_id: 2, // Set the appropriate tag_id
  },
  
];
//cretaes table
const seedProductTags = () => ProductTag.bulkCreate(productTagData);
//exports seed product tags
module.exports = seedProductTags;
