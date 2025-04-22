import db from '../config/db.js';

await db.schema.hasTable('users').then(exists => {
  if (!exists) {
    return db.schema.createTable('users', table => {
      table.increments('id').primary();
      table.string('email');
      table.string('username').unique();
      table.string('first_name');
      table.string('last_name');
    });
  }
});

await db.schema.hasTable('hashpwd').then(exists => {
  if (!exists) {
    return db.schema.createTable('hashpwd', table => {
      table.increments('id').primary();
      table.string('username').unique();
      table.string('password');
    });
  }
});
