/**
 * Product.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    name: {
      type: 'string',
      required: true,
    },
    price: {
      type: 'number',
      required: true,
      min: 0,
      required: true,
    },
    description: {
      type: 'string',
      required: true,
    },
  },
  createdAt: 'created_at',
  updatedAt: 'updated_at',
  timestamps: true,
};

