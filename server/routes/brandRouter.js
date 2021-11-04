const Router = require('express')
const brandRouter = require('../controllers/brandController')
const checkRole = require('../error/middleware/checkRoleMiddleware')
const router = new Router()

router.post('/', checkRole('ADMIN'), brandRouter.create)
router.get('/', brandRouter.getAll)


module.exports = router