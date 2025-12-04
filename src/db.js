import pkg from 'pg';
const { Pool } = pkg;

export const pool = new Pool({
  user: 'irts_user',
  password: 'password123',
  host: 'localhost',
  port: 5433,
  database: 'irts_db'
});
