
exports.up = function(knex) {
  // create a 'cars' table
  // define the schema
  return knex.schema.createTable('cars', tbl => {
      tbl.increments();
      tbl.integer('VIN').unique().notNullable();
      tbl.string('make').notNullable();
      tbl.string('model').notNullable();
  })
};

exports.down = function(knex) {
  // drop the cars table
  return knex.schema.dropTableIfExists('cars')
};
