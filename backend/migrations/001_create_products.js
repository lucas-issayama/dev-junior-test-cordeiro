exports.up = function (knex) {
  return knex.schema.createTable('products', (table) => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('code').notNullable();
    table.text('description');
    table.string('type').notNullable();
    table.string('business_unit').notNullable().defaultTo('corsolar');
    table.integer('cost_in_cents').notNullable();
    table.integer('default_price_in_cents').notNullable();
    table.integer('stock_quantity').notNullable().defaultTo(0);
    table.float('weight').notNullable();
    table.string('manufacturer_name').notNullable();
    table.float('ac_power').nullable();
    table.float('dc_power').nullable();
    table.boolean('enabled').notNullable().defaultTo(true);
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('products');
};
