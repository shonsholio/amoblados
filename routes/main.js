const express = require('express');
const router = express.Router();

const mainController = require('../controllers/mainController');

router.get('/', mainController.list);
router.get('/ciudad-jardin', mainController.cj);

// router.post('/add', mainController.save);
// router.get('/info', mainController.info);

module.exports = router;
