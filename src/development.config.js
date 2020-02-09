module.exports = {
    http: {
        port: 2137,
        ip: '127.0.0.1',
        apiRoot: '/api'
    },
    mongoDB: {
        host: 'mongodb://localhost/pharma', // Jesli mamy logowanie definiujemy jako mongodb://{login}:{haslo}@{host}/{nazwa-bazy}
        options: {
            debug: true,
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
        }
    },
    jwtExpiration: "30d"
}