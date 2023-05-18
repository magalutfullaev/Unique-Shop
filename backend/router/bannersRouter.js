const Router = require('express')
const bannerController =  require("../controllers/bannerController.js");

const router =  new Router();

router.get('/', bannerController.getBanners)
router.post('/', bannerController.createBanner)
router.post('/:id', bannerController.updateBanner)
router.delete('/:id', bannerController.deleteBanner)

module.exports = router