require("dotenv").config();

const db = {
  development: {
    client: 'pg',
    connection: { user: process.env.DB_USER, database: process.env.DB_NAME, password: process.env.DB_PASSWORD }
  },
  production: { client: 'pg', connection: process.env.DATABASE_URL }
};

module.exports = db