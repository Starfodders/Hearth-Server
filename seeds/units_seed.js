const unitsData = require('../seed_data/units-data');

exports.seed = function (knex) {
  return knex('units')
    .del()
    .then(function () {
      return knex('users').insert(unitsData);
    })
};