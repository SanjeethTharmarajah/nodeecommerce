// seeds/tag-seeds.js
const { Tag } = require('../models');

const tagData = [
  {
    tag_name: 'Electronics',
  },
  {
    tag_name: 'Fashion',
  },
  
];
//creates table
const seedTags = () => Tag.bulkCreate(tagData);
//exports seed tags
module.exports = seedTags;
