const name = process.argv[2].toLowerCase();

const pg = require('pg');
const settings = require('./settings');

const database = new pg.Client(settings);

database.connect((err) => {
  if (err) {
    throw new Error('Database connection failed!');
  }
  console.log('connected to db!');

  const query = 'SELECT * FROM famous_people WHERE lower(first_name) LIKE $1 OR lower(last_name) LIKE $1';

  database.query(query, ['%'+name+'%'], (err, result) => {
    if (err) {
      return console.error('error running query', err);
    }

    console.log('Searching ...');

    if (result.rowCount < 1) {
      console.log('No results found');
      database.end();
      return;
    }

    console.log(`Found ${result.rowCount} person(s) by the name ${name}:`)

    for (let i = 0; i < result.rowCount; i++) {
      let birthYear = result.rows[i].birthdate.getUTCFullYear();
      let birthMonth = result.rows[i].birthdate.getUTCMonth();
      let birthDate = result.rows[i].birthdate.getUTCDate();
      console.log(`${result.rows[i].first_name} ${result.rows[i].last_name}, born '${birthYear}-${birthMonth}-${birthDate}'`);
    };
    database.end();
  });
});