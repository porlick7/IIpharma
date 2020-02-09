const { Router } = require('express');
const { findAll, findByName, findByActiveName } = require('./controller');
const router = Router();
const token = require('../../middlewares/token');

router.get('/', token, findAll);
router.get('/:product', token, findByName);
router.get('/active/:activeName', token, findByActiveName);

module.exports = router;

//jesli zrobic transaction history w /users/me/history