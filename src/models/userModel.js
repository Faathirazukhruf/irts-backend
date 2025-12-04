import { pool } from "../db.js";

export const UserModel = {
  getAll: async () => {
    const result = await pool.query("SELECT * FROM users ORDER BY id DESC");
    return result.rows;
  },

  getById: async (id) => {
    const result = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
    return result.rows[0];
  },

  create: async (name, email, hashedPassword, role) => {
    const result = await pool.query(
      `INSERT INTO users (name, email, password, role)
       VALUES ($1, $2, $3, $4) RETURNING *`,
      [name, email, hashedPassword, role]
    );
    return result.rows[0];
  },

  update: async (id, name, email, role) => {
    const result = await pool.query(
      `UPDATE users SET name=$1, email=$2, role=$3 WHERE id=$4 RETURNING *`,
      [name, email, role, id]
    );
    return result.rows[0];
  },

  delete: async (id) => {
    const result = await pool.query("DELETE FROM users WHERE id = $1", [id]);
    return result.rowCount;
  }
};
