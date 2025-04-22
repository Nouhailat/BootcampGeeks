import pg from 'pg';
const { Pool } = pg;

const pool = new Pool({
  user: 'postgres',        
  host: 'localhost',
  database: 'userDb', 
  password: 'Nouha1234@', 
  port: 5432,
});

export default pool;
