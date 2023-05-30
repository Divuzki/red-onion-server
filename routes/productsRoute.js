const express = require('express');
const router = express.Router();
const {getProducts , updateProduct, createProduct} = require('../controllers/poductsController');

router.get('/', getProducts)
router.post('/', createProduct);
router.put('/:id', updateProduct)

module.exports = router;