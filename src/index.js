const { http, mongoDB } = require('./config'); //importowanie env, http, mongo z config
const routing = require('./api');

require('dotenv').config(); //kolejnosc?? do obslugi .env
const expressService = require('./services/express');
const mongoService = require('./services/mongoose');

const app = expressService(http, routing); // sciezka /api, routing
const db = mongoService(mongoDB);

module.exports = {
    app,
    db
}