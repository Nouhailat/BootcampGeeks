import knex from 'knex';

const db = knex({
  client: 'pg',
  connection: {
    host: 'localhost',  
    user: 'postgres', 
    password: 'Nouha1234@', 
    database: 'RLogin',  
  },
});

export default db;