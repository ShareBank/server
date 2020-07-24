import Knex from "knex";

export async function seed(knex: Knex) {
  await knex("users").insert([
    { name: "Fulano", email: "Fulano@email.com" },
    { name: "Cicrano", email: "Cicrano@email.com" },
    { name: "Beltrano", email: "Beltrano@email.com" }
  ]);
}
