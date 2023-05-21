const mariadb = require("mariadb");

// Certificate Authority (CA)",
// var serverCert = [fs.readFileSync(process.env.SKYSQL_CA_PEM, "utf8")];

// Main function
exports.module = async function main() {
   let conn;

   try {
      conn = await mariadb.createConnection({
         host: "127.0.0.1",
         port:3306 ,
        //  ssl: { ca: serverCert },
         user: "root",
         password: "rmfltmeh",
         database: "memo",
      });
      const xxx='xxx';

      // Use Connection to get contacts data
      var rows = await get_contacts(conn);

      //Print list of contacts
      for (i = 0, len = rows.length; i < len; i++) {
         console.log(`${rows[i]}`);
      }
   } catch (err) {
      // Manage Errors
      console.log(err);
   } finally {
      // Close Connection
      if (conn) conn.close();
   }
}

//Get list of contacts
function get_contacts(conn) {
   return conn.query("SELECT * from memos;");
}

// main();


