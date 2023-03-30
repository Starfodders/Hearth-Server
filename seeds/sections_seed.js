const sectionsData = require('../seed_data/sections-data');

exports.seed = function (knex) {
  return knex('sections')
    .del()
    .then(function () {
      return knex('sections').insert(sectionsData);
    })
};