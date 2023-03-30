const chaptersData = require('../seed_data/chapters-data');
const sectionsData = require('../seed_data/sections-data');
const unitsData = require('../seed_data/units-data');
const pagesData = require('../seed_data/pages-data');

exports.seed = function (knex) {
  return knex('chapters')
    .del()
    .then(function () {
      return knex('chapters').insert(chaptersData);
    })
    .then(() => {
      return knex('sections').del()
    })
    .then(() => {
      return knex('sections').insert(sectionsData)
    })
    .then(() => {
      return knex('units').del()
    })
    .then(() => {
      return knex('units').insert(unitsData)
    })
    .then(() => {
      return knex('pages').del()
    })
    .then(() => {
      return knex('pages').insert(pagesData)
    })
};