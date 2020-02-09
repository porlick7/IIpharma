const { Router } = require('express');
const { index, findByName } = require('./controller');
const router = Router();
const token = require('../../middlewares/token');

router.get('/', token, index);
router.get('/:active', token, findByName );

module.exports = router;