var mysql = require('mysql');

function Image(app) {
  this.app = app;

  this.getAll = function(callback) {
    var conn = mysql.createConnection(app.get('mysql'));
    conn.connect();
    app.get('logger').trace('getting all images from DB');
    conn.query("SELECT id, title FROM images;",
               function(err, rows, fields){
                 if (rows=="" || err) {
                     app.get('logger').error('Err occurred when feteching images')
                     callback(err, false);
                     return;
                 }
                 callback(err, _shuffle(rows));
               }
              );
              conn.end();
  };

  /*
   * Randomises the passed in array
   */
  function _shuffle(v) {
      for(var j, x, i = v.length; i; j = parseInt(Math.random() * i), x = v[--i], v[i] = v[j], v[j] = x);
      return v;
  };

};

module.exports = Image;
