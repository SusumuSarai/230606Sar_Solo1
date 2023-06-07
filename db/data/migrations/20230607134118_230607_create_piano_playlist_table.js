/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("playlist", (table) => {
    table.increments("id").primary();
    table.string("player", 32).notNullable();
    table.string("grade").notNullable();
    table.string("title", 255).notNullable();
    table.string("composer", 32).notNullable();
    table.integer("playerNumber", 2).notNullable();
    table.text("generalComment");
    table.text("studentComment");
    table.text("teacherComment");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("playlist");
};
