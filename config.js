const dotenv = require('dotenv');
const path = require('path');

dotenv.config({
    path: path.resolve(__dirname, process.env.NODE_ENV+'.env')
  });

module.exports = {
    
    NODE_ENV: process.env.NODE_ENV,
    HOST: process.env.HOST,
    PORT: process.env.PORT,
    DBHOST: process.env.DBHOST,
    DBPORT: process.env.DBPORT,
    DBUSER: process.env.DBUSER,
    DBPASS: process.env.DBPASS,
    DB: process.env.DB
}