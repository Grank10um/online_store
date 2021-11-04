const Router = require('express')
const deviceRouter = require('../controllers/deviceController')
const router = new Router()

router.post('/',deviceRouter.create)
router.get('/',deviceRouter.getAll)
router.get('/:id',deviceRouter.getOne)


module.exports = router