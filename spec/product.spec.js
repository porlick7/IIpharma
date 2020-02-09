'use strict'
const request = require('supertest');
const expect = require('chai').expect; // require('expect') const expect = chai.expect; 
const application = require('../src/index');
const User = require('../src/api/users/model');

// const token = require('../src/middlewares/token');
// const User = require('../src/api/users/model');

const app = application.app;
const mongoose = application.db;

describe('Integrations for user creation', () => {

    before((done) => {
        //mongoose.connection.collections.authors.drop(() => { done() });
        User.remove({}, () => { done(); }); //collection.remove is deprecated
    });

    describe('#GET /api/products', () => {//requesty w supertest jest synchroniczny http request sa asynchroniczne 
        it('access without token sends 401 unauthorized', (done) => { //czeka az test sie wykona 
            request(app)
                .get('/api/products').end((err, res) => {
                    expect(res.statusCode).to.equal(401);
                    done();
                })
        })
    }) //czy header dostaje token

    describe('#POST /user/signup', () => {
        it('user shall be made', (done) => {
            request(app)
                .post('/api/user/signup')
                .send({ username: "piotrek", email: "piotrek@piotrek.piotrek", password: "piotrek" })
                .end((err, res) => {
                    expect(res.statusCode).to.equal(201);
                    done();
                })
        })
    })

    describe('#POST /user/login', () => {
        it('testing login function', (done) => {
            request(app)
                .post('/api/user/login')
                .auth('piotrek', 'piotrek')
                .end((err, res) => {
                    expect(res.statusCode).to.equal(200);
                    done();
                })
        })
    }) 



    describe('#GET /api/products', () => {//requesty w supertest jest synchroniczny http request sa asynchroniczne 
        it('access without token sends 401 unauthorized', (done) => { //czeka az test sie wykona 
            request(app)
                .set("Authorization", "Bearer " + token) //set the header first
                .get('/api/products').end((err, res) => {
                    expect(res.statusCode).to.equal(200);
                    done();
                })
        })
    })

})
//mock zastepuje pewna funkcjonalnosc aplikacji w testach
