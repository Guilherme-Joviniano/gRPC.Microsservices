const { Router } = require('express');

const UserController = require('./controllers/UserController');
const SessionController = require('./controllers/SessionController');
const authMiddleware = require('./middlewares/auth');
const PurchaseController = require('./controllers/PurchaseController');

const router = Router();

router.get('/users/:id', UserController.show);
router.post('/users', UserController.store);
router.post('/sessions', SessionController.store);

// Purchase
router.post('/purchases/', authMiddleware, PurchaseController.store)
router.get('/purchases/:id', authMiddleware, PurchaseController.show)
router.get('/purchases/', authMiddleware, PurchaseController.index)


module.exports = router;    