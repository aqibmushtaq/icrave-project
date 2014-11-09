var mysql           = require('mysql'),
async           = require("async"),
UserActionImage = require("./user_action_image");

function UserAction(app) {
    this.app = app;

    this.insert = function(userId, action, responseResults, callback) {
        var conn = mysql.createConnection(app.get('mysql'));
        conn.connect();

        var inserts = [action.created_time, action.active, userId, action.undo_time];
        var sql = mysql.format("INSERT INTO user_actions (created_time_client, active, user_id, undo_time) VALUES (FROM_UNIXTIME(?), ?, ?, FROM_UNIXTIME(?));", inserts);

        //insert the action then insert all associated images
        conn.query(sql, 
                   function(err, result) {
                       if (err || !result) {
                           app.get("logger").error("[UserAction] Error inserting UserAction: " + sql);
                       } else {
                           var images = action.userActionImages;
                           async.forEach(images, function(image, callback2) {
                               image = JSON.parse(image);
                               new UserActionImage(app).insert(result.insertId, image, callback2);
                           }, function (err) {
                               responseResults.push({"result": err?false:true, "actionId": action._id});
                               callback();
                           })
                       }
                   }
                  );
                  conn.end();
    };
};

module.exports = UserAction;
