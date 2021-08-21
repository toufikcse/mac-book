document.getElementById('8gb-price').addEventListener('click', function() {
    const preExtraMemoryCost = document.getElementById('extra-memory-cost');
    preExtraMemoryCost.innerText = 0;

    // extra storage cost 
    const extraStorageCost = getStoragePrice();

    // delivery charge
    const deliveryCharge = getDeliveryCost();

    // total price 
    let totalPrice = document.getElementById('totol-price');
    totalPrice.innerText = 1299 + 0 + extraStorageCost + deliveryCharge;
    let totalPriceFinal = document.getElementById('total-price-final');
    totalPriceFinal.innerText = 1299 + 0 + extraStorageCost + deliveryCharge;
});


document.getElementById('16gb-price').addEventListener('click', function() {
    const preExtraMemoryCost = document.getElementById('extra-memory-cost');
    preExtraMemoryCost.innerText = 180;

    // extra storage cost 
    const extraStorageCost = getStoragePrice();

    // delivery charge
    const deliveryCharge = getDeliveryCost();

    // total price 
    let totalPrice = document.getElementById('totol-price');
    totalPrice.innerText = 1299 + 180 + extraStorageCost + deliveryCharge;
    let totalPriceFinal = document.getElementById('total-price-final');
    totalPriceFinal.innerText = 1299 + 180 + extraStorageCost + deliveryCharge;
});

// 256 gb ssd storage
document.getElementById('256gb-ssd').addEventListener('click', function() {
    const preStorgeCost = document.getElementById('extra-storage-cost');
    preStorgeCost.innerText = 0;

    // get extra memory cost
    const extraMemoryCost = getExtraMemoryCost();

    // delivery charge
    const deliveryCharge = getDeliveryCost();

    // total price 
    let totalPrice = document.getElementById('totol-price');
    totalPrice.innerText = 1299 + extraMemoryCost + 0 + deliveryCharge;
    let totalPriceFinal = document.getElementById('total-price-final');
    totalPriceFinal.innerText = 1299 + extraMemoryCost + 0 + deliveryCharge;
});

// 512 gb ssd storage
document.getElementById('512gb-ssd').addEventListener('click', function() {
    const preStorgeCost = document.getElementById('extra-storage-cost');
    preStorgeCost.innerText = 100;

    // get extra memory cost
    const extraMemoryCost = getExtraMemoryCost();

    // delivery charge
    const deliveryCharge = getDeliveryCost();

    // total price 
    let totalPrice = document.getElementById('totol-price');
    totalPrice.innerText = 1299 + extraMemoryCost + 100 + deliveryCharge;
    let totalPriceFinal = document.getElementById('total-price-final');
    totalPriceFinal.innerText = 1299 + extraMemoryCost + 100 + deliveryCharge;
});

// 512 gb ssd storage
document.getElementById('1tb-ssd').addEventListener('click', function() {
    const preStorgeCost = document.getElementById('extra-storage-cost');
    preStorgeCost.innerText = 180;
    
    // get extra memory cost
    const extraMemoryCost = getExtraMemoryCost();

    // delivery charge
    const deliveryCharge = getDeliveryCost();

    // total price 
    let totalPrice = document.getElementById('totol-price');
    totalPrice.innerText = 1299 + extraMemoryCost + 180 + deliveryCharge;
    let totalPriceFinal = document.getElementById('total-price-final');
    totalPriceFinal.innerText = 1299 + extraMemoryCost + 180 + deliveryCharge;
});

// free delivery option
document.getElementById('free-delivery').addEventListener('click', function() {
    const preDeliveryCost = document.getElementById('delivery-cost');
    preDeliveryCost.innerText = 0;

    // get extra memory cost
    const extraMemoryCost = getExtraMemoryCost();

    // extra storage cost 
    const extraStorageCost = getStoragePrice();

    // total price 
    let totalPrice = document.getElementById('totol-price');
    totalPrice.innerText = 1299 + extraMemoryCost + extraStorageCost + 0;
    let totalPriceFinal = document.getElementById('total-price-final');
    totalPriceFinal.innerText = 1299 + extraMemoryCost + extraStorageCost + 0;
});

// pay delivery option
document.getElementById('price-delivery').addEventListener('click', function() {
    const preDeliveryCost = document.getElementById('delivery-cost');
    preDeliveryCost.innerText = 20;

    // get extra memory cost
    const extraMemoryCost = getExtraMemoryCost();

    // extra storage cost 
    const extraStorageCost = getStoragePrice();

    // total price 
    let totalPrice = document.getElementById('totol-price');
    totalPrice.innerText = 1299 + extraMemoryCost + extraStorageCost + 20;
    let totalPriceFinal = document.getElementById('total-price-final');
    totalPriceFinal.innerText = 1299 + extraMemoryCost + extraStorageCost + 20;
});

// apply promo code
document.getElementById('promo-code').addEventListener('click', function() {
    const inputCode = document.getElementById('input-text');
    const inputText = inputCode.value;
    if(inputText == 'stevekaku') {
        getDiscount();
    }
});

function getDiscount(){
    const totalPrice = document.getElementById('total-price-final');
    const totalPriceFinal = parseFloat(totalPrice.innerText);
    const afterDiscountPrice = totalPriceFinal - (totalPriceFinal/5);
    totalPrice.innerText = afterDiscountPrice;
}

function getExtraMemoryCost() {
    const preExtraMemoryCost = document.getElementById('extra-memory-cost');
    const extraMemoryCost = parseFloat(preExtraMemoryCost.innerText);
    return extraMemoryCost;
}


function getStoragePrice() {
    const preExtraStorageCost = document.getElementById('extra-storage-cost');
    const extraStorageCost = parseFloat(preExtraStorageCost.innerText);
    return extraStorageCost;
}

function getDeliveryCost() {
    const preDeliveryCharge = document.getElementById('delivery-cost');
    const deliveryCharge = parseFloat(preDeliveryCharge.innerText);
    return deliveryCharge;
}

