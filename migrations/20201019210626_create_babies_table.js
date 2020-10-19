
exports.up = function(knex) {
    return knex.schema.createTable('babies', (table) => {
        table.increments();
        table.string('first_name').notNullable();
        table.string('last_name').notNullable();
        table.string('gender').notNullable();
        table.datetime('last_feeding');
        table.datetime('last_diaper');
        table.datetime('birthday').notNullable();
        table.datetime('last_updated').defaultTo(knex.fn.now())
    })
  
};

exports.down = function(knex) {
  return knex.schema.dropTable('babies');
};
