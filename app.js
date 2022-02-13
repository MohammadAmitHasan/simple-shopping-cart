function updateNoOfProduct(productType, pricePerProduct, increase) {
    const noOfProductInput = document.getElementById('no-of-' + productType);
    let noOfProducts = parseInt(noOfProductInput.value);
    const productPrice = document.getElementById(productType + '-total');
    if (increase) {
        noOfProducts += 1;
    }
    else {
        if (noOfProducts > 0) {
            noOfProducts -= 1;
        }
    }
    noOfProductInput.value = noOfProducts;
    productPrice.innerText = noOfProducts * pricePerProduct;
    getTotalPrice();
}
function getTotalPrice() {
    const phoneTotalPrice = document.getElementById('phone-total');
    const caseTotalPrice = document.getElementById('case-total');
    const totalPrice = parseFloat(phoneTotalPrice.innerText) + parseFloat(caseTotalPrice.innerText);
    const tax = totalPrice * .10;
    const grandTotal = totalPrice + tax;
    document.getElementById('sub-total').innerText = totalPrice;
    document.getElementById('tax').innerText = parseFloat(tax.toFixed(3));
    document.getElementById('grand-total').innerText = grandTotal;
}
// Phone section
document.getElementById('phone-plus').addEventListener('click', function () {
    updateNoOfProduct('phone', 1219, true);

})
document.getElementById('phone-minus').addEventListener('click', function () {
    updateNoOfProduct('phone', 1219, false);
})
// Case section
document.getElementById('case-plus').addEventListener('click', function () {
    updateNoOfProduct('case', 59, true);
})
document.getElementById('case-minus').addEventListener('click', function () {
    updateNoOfProduct('case', 59, false);
})