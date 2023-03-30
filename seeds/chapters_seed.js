const chaptersData = require('../seed_data/chapters-data');

exports.seed = function (knex) {
  return knex('chapters')
    .del()
    .then(function () {
      return knex('chapters').insert(chaptersData);
    })
};