
//get
const getProducts = (req, res) => {
    res.send({
        id:1,
        title: 'First Product',
    })
}

//update product
const updateProduct = (req, res) => {
    res.send('product has been updated')
}

const createProduct = (req, res) => {
    // { title, description, price, image, foodType }
    res.send('product has been updated')
}

module.exports = { getProducts, updateProduct, createProduct }