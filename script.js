console.log(Vehiculos);

const contenedor_cards = document.getElementById("contenedor_cards");

let templateCard = ""

function crearCards() {
    Vehiculos.forEach((Vehiculo) => {
        templateCard += `<div class="card">
        <img src="${Vehiculo.image}" alt="${Vehiculo.type} ${Vehiculo.id}">
        <p>${Vehiculo.name}</p>
        <a href="./info.html?id=${Vehiculo.id}" class="btn btn-danger">Mas info</a>
        </div>`
    })

    contenedor_cards.innerHTML = templateCard
}
crearCards()

