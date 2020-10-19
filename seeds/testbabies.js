
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('babies').del()
    .then(function () {
      // Inserts seed entries
      return knex('babies').insert([
        {id: 1, first_name: 'Steve', last_name: 'Harbinger of the End', gender: "M", birthday: '2020-01-11 10:23:52'},
        {id: 2, first_name: 'Aladaria', last_name: 'Ashbringer', gender: "F", birthday: '2020-02-22 09:15:30'},
        {id: 3, first_name: 'Rendt', last_name: 'Kingbreaker', gender: "M", birthday: '2020-01-11 10:23:52'}
      ]);
    });
};
