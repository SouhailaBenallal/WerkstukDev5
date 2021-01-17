var db = require('knex')({
    client: 'pg',
    connection: {
      host: process.env.POSTGRES_HOST || '127.0.0.1',
      user: process.env.POSTGRES_USER || 'test',
      password: process.env.POSTGRES_PASSWORD || 'test',
      database: process.env.POSTGRES_DB || 'test'
    },
    searchPath: ['knex', 'public']
  });
  
  async function initialiseTables() {
    await db.schema.hasTable('fablab').then(async (exists) => {
      if (!exists) {
        await db.schema
          .createTable('fablab', (table) => {
            table.uuid('uuid');
            table.string('machine');
            table.string('student');
            table.timestamps(true, true);
          })
          .then(async () => {
            console.log('created table fablab');
          });
  
      }
    });
  }
  
  initialiseTables()
  module.exports = db