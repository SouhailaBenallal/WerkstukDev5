
const knex = require('knex')({
    client: 'pg',
    connection: {
      filename: './data.db',
    },
  });
  
  // Create a table
  knex.schema
    .createTable('users', table => {
      table.increments('id');
      table.string('user_firstName');
    })
  
    // ...and another
    .createTable('machine', table => {
      table.increments('id');
      table.uuid('uuid')
      table.string('machine_name');
      table
        .integer('user_id')
        .unsigned()
        .references('users.id');
    })
  
    // Then query the table...
    .then(() =>
      knex('users').insert({ user_firstName: 'Souhaila' })
    )
  
    // ...and using the insert id, insert into the other table.
    .then(rows => 
      knex('machines').insert({ machine_name: 'Lazercutter', user_id: rows[0] })
    )
  
    // Query both of the rows.
    .then(() => 
      knex('users')
        .join('machines', 'users.id', 'machines.user_id')
        .select('users.user_name as user', 'machines.machine_name as machine')
    )
  
    // map over the results
    .then(rows =>
      rows.map(row => {
        console.log(row)
      })
    )
  
    // Finally, add a .catch handler for the promise chain
    .catch(e => {
      console.error(e);
    });