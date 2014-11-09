iCrave Server 
==============

Prerequisites/Setup
-------------------
1. Install libraries
..```
..**npm install**
..```
2. Create your SSL certificates in **./certs/**
..```
..openssl genrsa -out privatekey.pem 1024 
..openssl req -new -key privatekey.pem -out certrequest.csr 
..openssl x509 -req -in certrequest.csr -signkey privatekey.pem -out certificate.pem
..```
3. Modify the configuration
.. The configurations can be found inside **./config/index.js**

Start the server
----------------
```
node app [mode]

i.e. 
node app local
```

Copyright
---------
[License](http://creatiivecommons.org/licenses/by-nc-nd/3.0/deed.en_US)
