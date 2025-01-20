import mysql from 'mysql'

const con = mysql.createConnection({
  host: "localhost",
  user: "evangadi-admin",
  password: "123456",
  database: "employees",
});

con.connect(function(err) {
    if(err) {
        console.log("connection error")
    } else {
        console.log("Connected")
    }
})

export default con;

