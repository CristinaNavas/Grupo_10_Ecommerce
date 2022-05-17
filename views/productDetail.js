
const products = document.querySelector(".productHolder");

function createCard([img,product,category,brandName,rating,price,offer]){

    
    let code =`
    <div class="card">
        <img src="${img}" alt="${product}">
        <div class="cardText">
            <p class="categoryText">${category}</p>
            <h2 class="brandText">${brandName}</h2>
            <h5>${rating}</h5>
            <p class="priceText">${price}</p>
            <p class="offerText">${offer}</p>
        </div>
    </div> 
    `

products.innerHTML += code;
}

let item1 =[
    "/img/guitar5.jpg",
    "guitar",
    "Electrica",
    "Fender",
    "⭐⭐⭐⭐⭐",
    "$ 5000 USD",
    "50% Off",
];

let item2 =[
    "/img/guitar5.jpg",
    "guitar",
    "Acistica",
    "Fender",
    "⭐⭐⭐⭐⭐",
    "$ 5000 USD",
    "30% Off",
];

let item3 =[
    "/img/guitar5.jpg",
    "guitar",
    "Ectroacustica",
    "Fender",
    "⭐⭐⭐⭐⭐",
    "$ 5000 USD",
    "20% Off",
];


/* createCard(item1);
createCard(item2);
createCard(item3);
 */

let bodyElement = document.body;
let cardElement = document.createElement('div');
let imageConatainer = document.createElement('div');
let infoContainer = document.createElement('div');
let imageElement = document.createElement('img');
let headingElement = document.createElement('h5');
let paragraphElement = document.createElement('p');
let btnElement = document.createElement('a');

// adding classes
cardElement.className ="card";
imageConatainer.className = 'image-container';
infoContainer.className = "info-container";
imageElement.className = "image";
headingElement.className = "heading";
paragraphElement.className = "paragraph";
btnElement.className = "btn";


// works the same way as the className property except it sets the source atttribute of the imageElement
imageElement.src = "https://source.unspash..com/random";
btnElement.setAttribute("href", "#");
console.log(btnElement);

console.log(imageConatainer);