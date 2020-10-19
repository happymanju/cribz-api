module.exports = {
    development: {
      client: 'pg',
      connection: { user: 'postgres', database: 'cribz' , password: "manjuforever"}
    },
    production: { client: 'pg', connection: process.env.DATABASE_URL }
  };