
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('products').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('products').insert([
        {
          "id": 1,
          "name": "Keyboard",
          "description": "Standard windows keyboard",
          "price": 15
        },
        {
          "id": 2,
          "name": "Mouse",
          "description": "Standard laser mouse",
          "price": 10
        },
        {
          "id": 3,
          "name": "Apple Charger",
          "description": "Lightning Apple Charging Cord",
          "price": 18
        },
        {
          "id": 4,
          "name": "Android Charger",
          "description": "Mini USB charging cord",
          "price": 8
        },
        {
          "id": 5,
          "name": "Printer Paper",
          "description": "Standard white 8 1/2 X 11",
          "price": 10
        }
      ]);
    });
};
