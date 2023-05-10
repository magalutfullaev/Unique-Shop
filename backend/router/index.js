const Router = require('express')
const bannersRouter = require('./bannersRouter');
const categoryRouter = require('./categoryRouter');
const productsRouter = require('./productsRouter');

const router =  new Router();

router.use('/banners', bannersRouter)
router.use('/categories', categoryRouter)
router.use('/products', productsRouter)

module.exports =  router;