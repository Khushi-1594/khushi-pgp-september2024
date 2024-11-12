const products = [
    { name: "Laptop", category: "Electronics", price: 1200 },
    { name: "Phone", category: "Electronics", price: 800 },
    { name: "Shoes", category: "Fashion", price: 100 },
    { name: "HandBag", category: "Fashion", price: 1000},
    { name: "Shirt", category: "Fashion", price: 2000}
  ];

function filterAndDiscount(arr, minPrice, discount){
    var filterProducts= arr. filter(element => element.price>=minPrice)

    const disPrice= arr.map(element=>({
        ...element,
        price: element.price *(1-discount)
    }));

    var totalPrice= disPrice.reduce((total,element)=> total+element.price,0)
    return {filterProducts, disPrice, totalPrice};
}

var finalProducts= filterAndDiscount(products, 1000, 0.2)

console.log("Filtered products with price more than minPrice");
console.log(finalProducts.filterProducts);

console.log("Product list with discounted price");
console.log(finalProducts.disPrice);

console.log("Total price after discount");
console.log(finalProducts.totalPrice);