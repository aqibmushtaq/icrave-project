config = {
  local: {
    mode: 'local',
    port: 3000,
    mysql: {
      host: '127.0.0.1',		// MySQL database host e.g. 127.0.0.1
      port: '3306',				// MySQL port host e.g. 3306
      user: '',					// MySQL database username (must have read and write to tables)
      password: '',				// MySQL password
      database: 'icrave'		// MySQL database name
    },
    logLevel: 'trace'
  },
  staging: {
    mode: 'staging',
    port: 4000,
    logLevel: 'info' 
  },
  production: {
    mode: 'production',
    port: 5000,
    logLevel: 'warn'
  }
}
module.exports = function(mode) {
  return config[mode || process.argv[2] || 'local'] || config.local;
}
