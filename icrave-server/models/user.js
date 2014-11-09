var mysql = require('mysql');
var hash = require('password-hash');

var hashOptions = {algorithm: 'md5', saltLength: 8, iterations: 100};

function User(app) {
    this.app = app;

    this.verifyLogin = function(email, password, callback) {
        var conn = mysql.createConnection(app.get('mysql'));
        conn.connect();
        var inserts = [email];
        app.get('logger').trace('plain text password: %s', password);
        conn.query("SELECT id, password FROM users WHERE email = ?;", inserts, 
                   function(err, rows, fields){
                       var result = {};
                       if (rows=="" || !rows) {
                           result["result"] = 0;
                           callback(err, result);
                           return;
                       }

                       var passResult = hash.verify(password, rows[0].password);
                       result["result"] = passResult ? 1 : 0;
                       if (passResult)
                           result["id"] = rows[0].id;

                       callback(err, result);
                   }
                  );
                  conn.end();
    };

    this.createUser = function(email, password, callback) {
        //check if the user exists before inserting
        //if (this.exists(email, callback));
        var conn = mysql.createConnection(app.get('mysql'));
        conn.connect();
        var inserts = [email, hash.generate(password, hashOptions)];
        app.get('logger').trace('plain text password: %s', password);
        app.get('logger').trace('hashed password: %s', inserts[1]);
        conn.query("INSERT INTO users (email, password) VALUES (?, ?)", inserts, 
                   function(err, res){
                       var result = {};
                       if (err) {
                           result["result"] = 0;
                           callback(err, result);
                           return;
                       }

                       result["result"] = 1;
                       result["id"] = res.insertId;
                       callback(err, result);
                   }
                  );
                  conn.end();
    };
};

module.exports = User;
