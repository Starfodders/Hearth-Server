
exports.up = function(knex) {
  return knex('chapters').where('id', 6).update({units: 2})
};


exports.down = function(knex) {
  
};
