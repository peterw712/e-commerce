// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
// Category can have multiple products 
// Product can only belong to one category
Product.belongsTo(Category, {
  foreignKey: 'category_id'
})


// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id'
})

// Products belongToMany Tags (through ProductTag)
// Using the ProductTag through model, allows products to have multiple tags 
// and tags to have many products.
Product.belongsToMany(Tag, {
  through: ProductTag,
  as: 'tagged_product',
  foreignKey: 'product_id'
})

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag,
  as: 'tagged_product',
  foreignKey: 'tag_id'
})

//Setting up foreign key relationships that match the column created in the respective models.

ProductTag.belongsTo(Product, {
  foreignKey: 'product_id',
})

ProductTag.belongsTo(Tag, {
  foreignKey: 'tag_id'
})

Tag.hasMany(ProductTag, {
  foreignKey: 'tag_id'
})

Product.hasMany(ProductTag, {
  foreignKey: 'product_id'
})



module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
