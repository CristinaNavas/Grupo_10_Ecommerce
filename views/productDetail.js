const products = document.querySelector(".productHolder");

function createCard([img, product, category, brandName, rating, price, offer]) {
  let code = `
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
                    `;

  products.innerHTML += code;
}

let guitar1 = [
  "/img/guitars/guitar1.jpg",
  "guitar",
  "Acustica",
  "Gibson",
  "⭐⭐⭐⭐⭐",
  "$ 5000 USD",
  "50% Off",
];

let guitar2 = [
  "/img/guitars/guitar2.jpg",
  "guitar",
  "Electroacustica",
  "Vox Bobcat",
  "⭐⭐⭐⭐⭐",
  "$ 5000 USD",
  "30% Off",
];

let guitar3 = [
  "/img/guitars/guitar3.jpg",
  "guitar",
  "Electrica",
  "Jackson",
  "⭐⭐⭐⭐⭐",
  "$ 5000 USD",
  "20% Off",
];

let drum1 = [
  "/img/drums/drum1.jpg",
  "drum",
  "Percución",
  "Pearl",
  "⭐⭐⭐⭐⭐",
  "$ 5000 USD",
  "50% Off",
];

let drum2 = [
  "/img/drums/drum3.jpg",
  "drum",
  "Electrica",
  "Roland",
  "⭐⭐⭐⭐⭐",
  "$ 5000 USD",
  "30% Off",
];

let air1 = [
  "/img/air/clarinet.jpg",
  "drum",
  "Percución",
  "Yamaha",
  "⭐⭐⭐⭐⭐",
  "$ 5000 USD",
  "50% Off",
];

let air2 = [
  "/img/air/saxo.jpg",
  "drum",
  "Percución",
  "Queen",
  "⭐⭐⭐⭐⭐",
  "$ 5000 USD",
  "50% Off",
];

let air3 = [
  "/img/air/tuba.jpg",
  "drum",
  "Percución",
  "Jupiter",
  "⭐⭐⭐⭐⭐",
  "$ 5000 USD",
  "50% Off",
];


function removeElement(){
    let list = document.getElementsByClassName("card"); // Find the elements
    console.log(list);
    for(let i = list.length - 1; 0 <= i; i--)
    if(list[i] && list[i].parentElement)
    list[i].parentElement.removeChild(list[i]);
}

function tipo() {
    let instrumento= document.getElementById('instrumento');
    let myType = document.getElementById('myType');

    myType.value = instrumento.children[instrumento.selectedIndex].getAttribute('value');

    console.log(myType.value);
    if(myType.value == "cuerda"){
        
        removeElement()
        createCard(guitar3);
        createCard(guitar2);
        createCard(guitar1);
    } else if(myType.value == "percución"){
        
        removeElement()
        createCard(drum2);
        createCard(drum1);
    } else if(myType.value == "aire"){
        
        removeElement()
        createCard(air1);
        createCard(air2);
        createCard(air3);
    } else{
        removeElement()
    }
} 