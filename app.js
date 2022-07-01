const express = require('express')
const cors = require("cors");
const { dbConnection }  = require("./config/database");
const  errorHandler  = require('./middleware/error-handler');


/**
 * Init express
 */
const app = express();

/**
 * Middleware
 *
 * Put your own middleware
 */
app.use( cors() );
app.use( express.json() );
app.use( express.static('public') );
app.use( errorHandler );

/**
 *  Execute database connection function
 */

const connectionMongo = async () => {
    await dbConnection()
}

connectionMongo();


/**
 * Routes EndPoint
 *
 * @type {string}
 */
const informationEndPoint = '/api/v1/information';


/**
 * Routes
 */
app.use( informationEndPoint,require('./routes/info') );



const server = app.listen( process.env.PORT, () => {
    console.log(`Server running on ${ process.env.PORT }`)
});


module.exports = server;