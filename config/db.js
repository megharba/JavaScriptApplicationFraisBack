const mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'cj654063-002.dbaas.ovh.net',
  user     : 'gsbmegharba',
  password : 'gsbmegharbaSU2020',
  port     : '35305',
  database : 'gsbmegharba'
});

module.exports = connection

