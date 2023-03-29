const chaptersData = require('../seed_data/users-data');

exports.seed = function (knex) {
  return knex('users')
    .del()
    .then(function () {
      return knex('users').insert(chaptersData);
    })
};