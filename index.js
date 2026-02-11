// Tableau 'products' avec 12 objets différents
const products = [
    { name: 'Casque Bluetooth', price: 59 },
    { name: 'Clavier Mécanique', price: 85 },
    { name: 'Souris Gamer', price: 45 },
    { name: 'Écran 24 pouces', price: 150 },
    { name: 'Enceinte Connectée', price: 35 },
    { name: 'Disque Dur Externe', price: 70 },
    { name: 'Tapis de souris XXL', price: 20 },
    { name: 'Webcam HD', price: 50 },
    { name: 'Support Ordinateur', price: 25 },
    { name: 'Microphone USB', price: 110 },
    { name: 'Câble HDMI 2m', price: 10 },
    { name: 'Adaptateur USB-C', price: 15 }
];

// Ajoute les produits
// Ajoute  ul(productList) à la  div(id=productsContainer")>
const productsList = document.createElement("ul");
document.getElementById("productsContainer").appendChild(productsList);


// Boucle sur les produits
products.forEach(product => {
    const productItem = document.createElement("li");
    let productName = document.createElement("p");
    productName.innerText = product.name;
    let productPrice = document.createElement("small");
    productPrice.innerText = product.price;
    // Ajoute p(productName) + small(productPrice) à la li(productItem)
    productItem.appendChild(productName);
    productItem.appendChild(productPrice);
    // Ajoute  li(productItem) à la ul(productList)
    productsList.appendChild(productItem);



})
const optionList = document.querySelector("optionList");
optionList.addEventListener("click", displayList);
function displayList() {
    const productsList = document.createElement("ul");
    document.getElementById("productsContainer").appendChild(productsList);


    // Boucle sur les produits
    products.forEach(product => {
        const productItem = document.createElement("li");
        let productName = document.createElement("p");
        productName.innerText =`Name: ${product.name}€`;
        let productPrice = document.createElement("small");
        productPrice.innerText = `Prix: ${product.price}€`;
        // Ajoute p(productName) + small(productPrice) à la li(productItem)
        productItem.appendChild(productName);
        productItem.appendChild(productPrice);
        // Ajoute  li(productItem) à la ul(productList)
        productsList.appendChild(productItem);


    })

}
console.log(displayList);







