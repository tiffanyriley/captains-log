const express = require ('express');
const router = express.Router();
const captainsController = require('../controllers/captainsController');

//Restful Routes

router.get('/', captainsController.logIndex);
router.get('/logs/new', captainsController.logNew)
router.get('/:id', captainsController.logShow)
router.get('/logs', captainsController.logCreate)
router.get('/:id/edit', captainsController.logEdit)
router.put('/:id', captainsController.logUpdate)
router.delete('/:id', captainsController.logDelete)

module.exports = router;