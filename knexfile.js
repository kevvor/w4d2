// Update with your config settings.
const settings = require('./settings');

module.exports = {

  development: {
    client: 'pg',
    connection: {
      user      : settings.connection.user,
      password  : settings.connection.password,
      database  : settings.connection.database,
      host      : settings.connection.hostname,
      port      : settings.connection.port,
      ssl       : settings.connection.ssl
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
