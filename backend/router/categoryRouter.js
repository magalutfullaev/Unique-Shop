const Router = require('express');
const categoryController = require('../controllers/categoryController.js');

const router = new Router();

router.get('/', categoryController.getCategories);
router.get('/:category', categoryController.getOneCategory);
router.get('/type/:type', categoryController.getFromCategory);
router.post('/', categoryController.createCategory);
router.patch('/:id', categoryController.updateCategory)
router.delete('/:id', categoryController.deleteCategory);

module.exports = router;