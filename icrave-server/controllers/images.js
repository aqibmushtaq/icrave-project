var image = require('../models/image');
module.exports.controller = function(app) {

  this.app = app;

  /*
   * Example usage:
   * /images/all
   */
  app.get('/images/all', function(req, res) {
    var myImage = new image(app);
    app.get('logger').debug('getting all images');

    myImage.getAll(function(err, result){
      if (err) 
        res.send('an error occured');
      else
        res.send(JSON.stringify(result));
    });
  });
}
