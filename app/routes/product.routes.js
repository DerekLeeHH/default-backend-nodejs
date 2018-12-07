module.exports = (app) => {
    const products = require('../controllers/product.controller.js');

    // create a product
    app.post('/products', products.create);

    // Retrieve all products
    app.get('/products', products.findAll);

    // 
    app.get('/products/:productId', products.findOne);

    // 
    app.put('/products/:productId', products.update);

    // 
    app.delete('/products/:productId', products.delete);
}