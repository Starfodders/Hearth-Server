const pagesData = require('../seed_data/pages-data');

exports.seed = function (knex) {
  return knex('pages')
    .del()
    .then(function () {
      return knex('users').insert(pagesData);
    })
};