function updateNoOfProduct(productType, increase) {
    const noOfProductInput = document.getElementById('no-of-' + productType);
    const noOfProducts = parseInt(noOfProductInput.value);
    if (increase) {
        noOfProductInput.value = noOfProducts + 1;
    }
    else {
        if (noOfProducts > 0) {
            noOfProductInput.value = noOfProducts - 1;
        }
    }
}
// Phone section
document.getElementById('phone-plus').addEventListener('click', function () {
    updateNoOfProduct('phone', true);
})
document.getElementById('phone-minus').addEventListener('click', function () {
    updateNoOfProduct('phone', false);
})
// Case section
document.getElementById('case-plus').addEventListener('click', function () {
    updateNoOfProduct('case', true);
})
document.getElementById('case-minus').addEventListener('click', function () {
    updateNoOfProduct('case', false);
})