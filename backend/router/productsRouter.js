const Router = require('express');
const productsController = require('../controllers/productsController');

const router = new Router();

router.get('/new/:gender', productsController.getNewProducts)
router.get('/:gender/:category?', productsController.getProducts)
router.post('/', productsController.createProduct)
router.post('/:id', productsController.updateProduct)
router.delete('/:id', productsController.deleteProduct)

module.exports = router