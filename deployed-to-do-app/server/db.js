const Pool = require('pg').Pool


const pool = new Pool ({
    user: 'postgres',
    password : 'sakalam18',
    host : 'db',
    port: 5432,
    database : 'todoapp'
})

module.exports = pool
