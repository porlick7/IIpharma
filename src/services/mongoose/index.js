const mongoose = require('mongoose');

const createDatabase = (mongoDB) => {
    for (const [key, value] of Object.entries(mongoDB.options)) {
        mongoose.set(key, value);
    }

    mongoose.connection.on('connected', (res) => {
        console.log('MongoDB connected successfully')
    });

    mongoose.connection.on('error', (err) => {
        console.error('MongoDB connection error: ' + err);
        process.exit(-1)
    });

    mongoose.connect(mongoDB.host)

    return mongoose;
}

module.exports = createDatabase;