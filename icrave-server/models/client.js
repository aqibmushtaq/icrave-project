var keys = {
  'YOUR KEY HERE': 'android-app'
};

module.exports = function Client() {

  this.exists = function(apiKey) {
    return !!keys[apiKey];
  };

};
