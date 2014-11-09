Instructions
============

Setting up the server
---------------------

###Database
1. Install MySQL
2. Create a database named 'icrave'
3. Create a user who has read and write access to the icrave database
4. With the root MySQL user run the 'database.sql' file

###NodeJS
1. Install Node.JS and NPM
2. Navigate into the 'icrave-server' folder within Terminal
3. Generate the server keys in the 'certs' folder using this tutorial: https://docs.nodejitsu.com/articles/HTTP/servers/how-to-create-a-HTTPS-server
4. Navigate back to 'icrave-server/models' and open client.js
5. Change the 'YOUR KEY HERE' value to your api key - generate a random string of 64 characters, use this: http://www.unit-conversion.info/texttools/random-string-generator/
6. Run 'npm install'
7. Run 'node app'

Setting up the Android app
--------------------------
1. Open icrave-app/app/src/main/res/values/server_config.xml and change 'server_api_key' to the value from NodeJS step 5.
2. Open icrave-app using Android Studio and build it
