module.exports = {
    development: {
      client: 'pg',
      connection: { user: 'postgres', database: 'cribz' }
    },
    production: { client: 'pg', connection: process.env.DATABASE_URL }
  };