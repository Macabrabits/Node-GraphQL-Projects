module.exports = {
    priceWithDiscount(product){
        const discount = product.price * ( (product.discountPercentage || 0) / 100 )
        return product.price - discount
    }
}