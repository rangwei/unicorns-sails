/**
 * Unicorns.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    name: { type: 'string', required: true },
    country: { type: 'string' },
    last_funding_on: { type: 'string', columnType: 'date' },
    total_equity_funding: { type: 'number' },
    founded_on: { type: 'number' },
    category: { type: 'string' },
    post_money_val: { type: 'number' }
  },

};

