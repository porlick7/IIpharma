const { Router } = require('express');
const products = require('./product');
const users = require('./users');
const activeSubstances = require('./active_substances');
const operations = require('./operationsOnMongo');

const router = new Router();

router.use('/active', activeSubstances);
router.use('/products', products);
router.use('/user', users);
router.use('/', operations);

module.exports = router;