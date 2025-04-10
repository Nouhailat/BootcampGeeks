const products=require('./exercice1Xp')
function findProduct(productName) {
    return products.find(product=>product.name.toLocaleLowerCase()===productName.toLocaleLowerCase())

    
}
const p=findProduct('airpods')
console.log(p);
