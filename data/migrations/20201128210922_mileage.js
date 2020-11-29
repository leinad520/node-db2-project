
exports.up = function(knex) {
  return knex.schema.table('cars', tbl => {
      tbl.string('mileage', 128)
  })
};

exports.down = function(knex) {
  return knex.schema.table('cars', tbl => {
      tbl.dropColumn('mileage')
  })
};
