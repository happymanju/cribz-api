
exports.up = function(knex) {
    return knex.schema.table('babies', (table) => {
        table.dropColumn('last_feeding');
        table.dropColumn('last_diaper');
        table.dropColumn('birthday');
        table.dropColumn('last_updated');
        table.dropColumn('last_name');
        table.renameColumn('first_name', 'full_name');
    })
  
};

exports.down = function(knex) {
    return knex.schema.table('babies', (table) => {
        table.datetime('last_feeding');
        table.datetime('last_diaper');
        table.datetime('birthday');
        table.datetime('last_updated').defaultTo(knex.fn.now());
        table.string('last_name');
        table.renameColumn('full_name', 'first_name');
    })
};
