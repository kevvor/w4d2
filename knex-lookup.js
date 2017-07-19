const name = process.argv[2];

const settings = require('./settings');
const knex = require('knex')(settings);

knex.select()
  .from('famous_people')
  .where('first_name', 'like', '%'+name+'%')
  .orWhere('first_name', 'like', '%'+name+'%')
  .asCallback(function (err, result) {
    console.log(`Found ${result.length} Person(s) with the name ${name}:`)
    result.forEach(function (row,index){
      let dob = row.birthdate.toString().substring(0,15); // adjust for format not exactly as it is in compass (https://stackoverflow.com/questions/3552461/how-to-format-a-javascript-date)
      console.log(`-${index+1} :${row.first_name} ${row.last_name}, born '${dob}'`);
    });
  knex.destroy();
})