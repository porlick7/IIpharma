const { Product } = require("./model")
const { ActiveSubstance } = require('../active_substances/model');
//const Joi = require('@hapi/joi');

// Get All Products
const findAll = (req, res) => {
    Product.find()//{}, "-_id -__v -activeSubstance -refundation -perscription"
        //.populate('activeSubstance', 'substance') //mozna po prostu to wywalic
        .then(product => {                 //STATIC mongoose methods Product.method(), normal methods product.method()
            res.json(product.map(product => product.view()))
        }).catch(err => {
            res.status(500).send({
                message: err.message
            })
        });
    };

// Find a Product by name
const findByName = (req, res) => {
    Product.find({ name: RegExp(`^${req.params.product}`, 'i') })
        .populate('activeSubstance', '-_id -__v') // lowerCASE 
        .exec((err, product) => {
            if (err) {
                if (err.kind === 'ObjectId') {
                    return res.status(404).send({
                        message: "Product not found with given name " + req.params.product
                    });
                }
                return res.status(500).send({
                    message: "Error retrieving Product with given name" + req.params.product
                });
            }
            res.send(product.map(product => product.view(true)));
        });
};

const findByActiveName = (req, res) => {
    Product.find()
        //.populate('activeSubstance', null, { substance: { $in: [req.params.activeName] } })
        .populate({
            path: 'activeSubstance',
            match: { substance: req.params.activeName }, // populate na tylko tych ktore maja match z activeName
            select: '-_id -__v' //przedtem bylo substance
        })
        .exec((err, product) => {
            product = product.filter((product) => {
                return product.activeSubstance.length
            });

            if (typeof product !== 'undefined' && product.length > 0) {
                res.send(product.map(product => product.view(true)));
            }
            else {
                return res.status(404).send({
                    message: "Product not found with given active ingredient" + req.params.activeName
                });
            }
        });        
}

module.exports = { findAll, findByName, findByActiveName };

//let searchkey = new RegExp(`^${req.params.product}`, 'i')
//virtual schema
//agreggate