'use strict';
function getShippingCost(country) {
    let price;
    const formattedCountry = country[0].toUpperCase() + country.slice(1).toLowerCase();
    switch (formattedCountry) {
        case 'China':
            price = 100;
            break;
        case 'Chile':
            price = 250;
            break;
        case 'Australia':
            price = 170;
            break;
        case 'Jamaica':
            price = 120;
            break;
        default:
            return "Sorry, there is no delivery to your country";
    }

    return `Shipping to ${formattedCountry} will cost ${price} credits`;
}

console.log(getShippingCost("Australia")); 
console.log(getShippingCost("Germany")); 
console.log(getShippingCost("China")); 
console.log(getShippingCost("Chile")); 
console.log(getShippingCost("Jamaica"));
console.log(getShippingCost("Sweden")); 