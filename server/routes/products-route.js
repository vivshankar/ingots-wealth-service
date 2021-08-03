// import dependencies and initialize the express router
const express = require('express');
const ProductsController = require('../controllers/products-controller');
const productsController = new ProductsController();

const router = express.Router();
const jsonParser = express.json();
const urlEncodedParser = express.urlencoded({
    extended: true,
});

// define routes
router.get('/', productsController.getProducts);
router.get('/choose', productsController.chooseProduct);
router.post('/choose', urlEncodedParser, productsController.storeProduct);
router.get('/add_payee', productsController.authorizePayee);
router.get('/check_payee', productsController.authorizePayee);

module.exports = router;