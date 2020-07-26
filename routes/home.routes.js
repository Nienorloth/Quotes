const router = require('express').Router();
const { HomeController } = require('../controllers');

router.get('/', HomeController.index);
router.get('/about', HomeController.about);
router.get('/quotes', HomeController.quotes);

module.exports = router;