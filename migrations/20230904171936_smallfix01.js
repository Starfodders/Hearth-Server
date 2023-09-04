
exports.up = function(knex) {
  return knex('pages').where('id', 12).update({content: "Some examples of common coping strategies include:;Isolating yourself from distressing situations;Using alcohol or substances to numb your feelings;Engaging in self-harm behaviors such as cutting, hitting, and scratching;Punishing yourself through excessive eating or by not eating at all;Avoiding activities that bring you pleasure because you feel unworthy;Taking your feelings out on others through manipulation or anger."})
  .then(() => {
    return knex('pages').where('id', 158).update({title: null})
  })
};

exports.down = function(knex) {
    return knex('pages').where('id', 12).update({content: "Some examples of common coping strategies include:;-Isolating yourself from distressing situations;-Using alcohol or substances to numb your feelings;-Engaging in self-harm behaviors such as cutting, hitting, and scratching;-Punishing yourself through excessive eating or by not eating at all;-Avoiding activities that bring you pleasure because you feel unworthy;-Taking your feelings out on others through manipulation or anger."})
    .then(() => {
        return knex('pages').where('id', 158).update({title: 'null'})
      })
};

