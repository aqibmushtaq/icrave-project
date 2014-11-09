var user = require('../models/user');
module.exports.controller = function(app) {

    this.app = app;

    /*
     * Usage examples
     * /users/login?email=foo@bar.com&password=foobar
     */
    app.get('/users/login', function(req, res) {
        var myUser = new user(app);
        var email = req.query.email;
        var password = req.query.password;
        app.get('logger').debug('email: %s', email);
        app.get('logger').debug('password: %s', password);

        if(!email || !password) {
            res.send(JSON.stringify({"result": 0}));
            return;
        }

        myUser.verifyLogin(email, password, function(err, result){
            res.send(JSON.stringify(result));
        });
    });

    /*
     * Usage examples
     * /users/create?email=foo@bar.com&password=foobar
     */
    app.get('/users/create', function(req, res) {
        var myUser = new user(app);
        var email = req.query.email;
        var password = req.query.password;
        if(!email || !password) {
            res.send('email and password must be provided');
            return;
        }
        myUser.createUser(email, password, function(err, result) {
            if (err && err.toString().indexOf('ER_DUP_ENTRY')) {
                app.get('logger').debug('email address \'%s\' is already taken', email);
                res.send(JSON.stringify({"result": -1}));
                return;
            }

            app.get('logger').debug('user created with email address: %s', email);
            res.send(JSON.stringify(result));
        });
    });
}
