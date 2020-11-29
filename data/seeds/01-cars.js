
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {id: 1, VIN: '443', make: 'Mercedes-Benz', model: 'GLC-300', mileage: 30000},
        {id: 2, VIN: '264', make: 'Volkswagen', model: 'Touareg'},
      ]);
    });
};
