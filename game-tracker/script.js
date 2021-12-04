const jogosLista = document.getElementById("jogos-lista");

let ofertas = [
  {
    title: "RAGE 2",
    salePrice: "0,00",
    normalPrice: "199,00",
    thumb: "assets/imgs/548570.jpg",
  },
  {
    title: "Batman™: Arkham Knight",
    salePrice: "12,49",
    normalPrice: "49,99",
    thumb: "assets/imgs/208650.jpg",
  },
  {
    title: "The Sims™ 4",
    salePrice: "39,75",
    normalPrice: "159,00",
    thumb: "assets/imgs/1222670.jpg",
  },
  {
    title: "Street Fighter V",
    salePrice: "15,99",
    normalPrice: "39,99",
    thumb: "assets/imgs/310950.jpg",
  },
  {
    title: "Divinity: Original Sin 2 - Definitive Edition",
    salePrice: "36,39",
    normalPrice: "90,99",
    thumb: "assets/imgs/435150.jpg",
  },
  {
    title: "Planet Zoo",
    salePrice: "50,00",
    normalPrice: "100,00",
    thumb: "assets/imgs/703080.jpg",
  },
  {
    title: "Battlefield V",
    salePrice: "119,60",
    normalPrice: "299,00",
    thumb: "assets/imgs/1238810.jpg",
  },

  {
    title: "Arma 3",
    salePrice: "17,49",
    normalPrice: "69,99",
    thumb: "assets/imgs/107410.jpg",
  },
  {
    title: "Zombie Army 4: Dead War",
    salePrice: "84,59",
    normalPrice: "93,99",
    thumb: "assets/imgs/694280.jpg",
  },
  {
    title: "Sniper Ghost Warrior Contracts",
    salePrice: "34,99",
    normalPrice: "69,99",
    thumb: "assets/imgs/973580.jpg",
  },
  {
    title: "Jurassic World Evolution",
    salePrice: "19,99",
    normalPrice: "79,99",
    thumb: "assets/imgs/648350.jpg",
  },
  {
    title: "RollerCoaster Tycoon® 3: Complete Edition",
    salePrice: "22,79",
    normalPrice: "37,99",
    thumb: "assets/imgs/1368820.jpg",
  },
];

window.onload = () => {
  jogosLista.innerHTML = "";
  addDiscount();

  ofertas.map((oferta) => {
    jogosLista.innerHTML += `
      <article class="oferta">

        <figure>
          <img class="game-image" src="${oferta.thumb}" alt="${oferta.title}">
        </figure>

        <section>
          <h2 class="text">
            ${oferta.title}
          </h2>
        </section>
      
        <section class="game-info">
          <div>
            <button>
              <h3 class="text-bold">
                DETALHES
              </h3>
            </button>
          </div>
          <div class="game-value">
            <div class="game-price">
              <small class="preco-normal">$ ${oferta.normalPrice}</small>
              <h5 class="preco-oferta text-bold">$ ${oferta.salePrice}</h5>
            </div>
            <div class="game-discount">
              <h3 class="text-bold">
                ${oferta.discount == 100 ? "GRÁTIS" : -oferta.discount + "%"}
              </h3>
            </div>
          </div>
        </section> 
      </article>
      `;
  });
};

function addDiscount() {
  ofertas = ofertas.map((oferta) => {
    let discount =
      1 - parseInt(oferta.salePrice) / parseInt(oferta.normalPrice);
    let percentage = 100 * discount.toFixed(2);
    oferta.discount = percentage;
    return oferta;
  });
}
