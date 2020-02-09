module.exports = {
    http: {
        port: 2137,
        ip: '127.0.0.1',
        apiRoot: '/api'
    },
    mongoDB: {
        host: 'mongodb://localhost/pharma--testing', // Jesli mamy laczenie do mongo przez uri definiujemy jako mongodb://{login}:{haslo}@{host}/{nazwa-bazy}
        options: {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
        }
    },
    jwtExpiration: "30d"
}