
 const queryString = document.location.search 

 const params = new URLSearchParams(queryString)

 const id = params.get("id")

 const vehiculoBuscado = Vehiculos.find( Vehiculos => Vehiculos.id == id)

 console.log(vehiculoBuscado);

 const contenedor_cards = document.querySelector(".contendor_cards")

 contenedor_cards.innerHTML = 
     `<div class="column">
    <h2>${vehiculoBuscado.name}</h2>
    <img src="${vehiculoBuscado.image}" alt="Imagen del Vehiculo">
    </div>

    <div class="column">
        <h2>Información</h2>
        <p>${vehiculoBuscado.information}</p>
    </div>`
