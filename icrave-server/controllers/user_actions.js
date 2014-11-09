var UserAction      = require("../models/user_action"),
    UserActionImage = require("../models/user_action_image"),
    async           = require("async");

module.exports.controller = function(app) {

    this.app = app;

    /*
     * Example usage:
     * /user_actions/all
     */
    app.put('/user-actions/create', function(req, res) {
        var log = app.get('logger');

        var myUserAction = new UserAction(app);
        var myUserActionImage = new UserActionImage(app);

        var userId = req.query.user_id;
        if (!userId) {
            res.send(406);
            return;
        }
        log.debug("[user_actions] create for user " + userId);

        log.debug("[user_actions] input1: " + req.body);
        var userActions = JSON.parse("[" + req.body  + "]");
        var responseResults = [];

        log.debug("[user_actions] input: " + userActions);
        async.forEach(userActions, function(userAction, callback) {
            myUserAction.insert(userId, userAction, responseResults, callback);
        }, function() {
            var result = JSON.stringify(responseResults);
            log.debug("[user_actions] return result: " + result);
            res.json(result);
            res.send(200);
        });
    });
}
