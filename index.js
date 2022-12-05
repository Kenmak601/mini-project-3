const express = require('express') // importing express module
const app = express()
const port = 4000

app.use(express.json()); // to enable req.body, use console.log(req.body) to see all the data in the body details

let cors = require("cors"); // used on the front end
app.use(cors());
//////// MySQL starts here
const mysql = require('mysql');// add mySQL into project (npm install mysql) 
const dbConfig = require('./config/db.config.js'); // import dbconfig.js file



// application.use(express.json());// to access body from postman



var connection = mysql.createPool // standard code to use for mySQL connection
    ({
        host: dbConfig.HOST,
        user: dbConfig.USER,
        password: dbConfig.PASSWORD,
        database: dbConfig.DB
    });

module.exports = connection

var routeJSLocation = require('./routes/miniProject3Route') // web server routing // this line has to come adter the mysql connection above
app.use('/miniProject3', routeJSLocation)

// swagger 
const swaggerUi = require('swagger-ui-express');
swaggerDocument = require('./swagger.json');
app.use('/api-docs',swaggerUi.serve,swaggerUi.setup(swaggerDocument));

app.listen(port, () => { console.log(`Example app listening at http://localhost:${port}`) })
 // export