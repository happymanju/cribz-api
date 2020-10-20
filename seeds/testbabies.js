
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('babies').del()
    .then(function () {
      // Inserts seed entries
      return knex('babies').insert([
        {id: 1, full_name: 'steve', gender: "M"},
        {id: 2, full_name: 'aladaria', gender: "F"},
        {id: 3, full_name: 'rendt', gender: "M"}
      ]);
    });
};
