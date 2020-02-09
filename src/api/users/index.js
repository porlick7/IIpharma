const { Router } = require('express');
const { create, deleteDB, login, index, showMe } = require('./controller');
const password = require('../../middlewares/password');
const token = require('../../middlewares/token');
const router = Router();

router.post('/signup', create);
router.get('/', token, index);
router.get('/me', token, showMe);
router.post('/login', password, login);

//dev 
router.delete('/:id', deleteDB)

module.exports = router;