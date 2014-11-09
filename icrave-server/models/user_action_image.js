var mysql = require('mysql');

function UserActionImage(app) {
    this.app = app;

    this.insert = function(userActionId, image, callback) {
        var log = app.get("logger");
        log.debug("[UserActionImage] image.rating = " + image.rating);

        var conn = mysql.createConnection(app.get('mysql'));
        conn.connect();
        var inserts = [userActionId, image.created_time, image.server_image_id, image.rating, image.eating_decision_id];
        var sql = mysql.format("INSERT INTO user_action_images (user_action_id, client_created_time, image_id, rating, crave_decision_id) VALUES (?, FROM_UNIXTIME(?), ?, ?, ?);", inserts);
        conn.query(sql, 
                   function(err, result) {
                       log.debug("[UserActionImage] result: " + result + "\nerr: " + err);
                       if (!err)
                           log.debug("[UserActionImage] inserted image with id=" + result.insertId);
                       callback(err, result);
                   }
                  );
                  conn.end();
    };
};

module.exports = UserActionImage;
