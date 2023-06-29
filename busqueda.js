const vehicleCardsContainer = document.getElementById('contenedor_cards');
const checkboxMotos = document.getElementById('checkboxm');
const checkboxAutos = document.getElementById('checkboxa');

// Función para mostrar los vehículos en las cards
function showVehicles() {

    Vehiculos.forEach((Vehiculo) => {
        templateCard += `<div class="card">
        <img src="${Vehiculo.image}" alt="${Vehiculo.type} ${Vehiculo.id}">
        <p>${Vehiculo.name}</p>
        <a href="./info.html?id=${Vehiculo.id}" class="btn btn-danger">Mas info</a>
        </div>`
    })

    contenedor_cards.innerHTML = templateCard

  // Limpiar cards anteriores
  vehicleCardsContainer.innerHTML = '';

  // Obtener los valores de los checkboxes seleccionados
  const selectedTypes = [];
  if (checkboxMotos.checked) {
    selectedTypes.push(checkboxMotos.value);
  }
  if (checkboxAutos.checked) {
    selectedTypes.push(checkboxAutos.value);
  }

  // Filtrar los vehículos según los tipos seleccionados
  const filteredVehicles = selectedTypes.length > 0
    ? Vehiculos.filter(Vehiculo => selectedTypes.includes(Vehiculo.type))
    : Vehiculos;

  // Crear las cards para los vehículos filtrados
  filteredVehicles.forEach(Vehiculo => {
    const card = document.createElement('div');
    card.className = 'Vehiculo-card';
    card.textContent = Vehiculos.name;
    
    const image = document.createElement('img');
    image.src = Vehiculo.image;
    card.appendChild(image);

    const name = document.createElement('h3');
    name.textContent = Vehiculo.name;
    card.appendChild(name);

    const button = document.createElement('button');
    button.textContent = 'Mas Informacion';
    button.addEventListener('click', () => {
      const nuevaPestana = window.open('info.html', '_blank');
    // Aquí puedes agregar tu lógica adicional, como mostrar información detallada del vehículo, etc.
  });
  card.appendChild(button);

    vehicleCardsContainer.appendChild(card);
  });
}



// Agregar controladores de eventos a los checkboxes
checkboxMotos.addEventListener('change', showVehicles);
checkboxAutos.addEventListener('change', showVehicles);

// Mostrar los vehículos iniciales
showVehicles();

//barra de busqueda
{
    let selectedTypes = [];
  if (checkboxMotos.checked) {
    selectedTypes.push(checkboxMotos.value);
  }
  if (checkboxAutos.checked) {
    selectedTypes.push(checkboxAutos.value);
  }
  const inputBusqueda = document.getElementById('buscar');
  let templateCard = ""

  

inputBusqueda.addEventListener('input', () => {
    const inputValue = inputBusqueda.value;
    // Realizar acciones con el valor del input, como búsqueda o filtrado

    crearTarjetasInput()

    if (VehiculosFiltradosInput.length === 0) {
        contenedor_cards.innerHTML = "<h2>Sin Resultados</h2>"
    }

    console.log(VehiculosFiltradosInput);
    let labelBuscar = document.getElementById("labelBuscar")
    labelBuscar.innerHTML = inputValue
    console.log(inputValue);
  });
  
  function crearTarjetasInput() {
    

    const textoBusqueda = inputBusqueda.value.toLowerCase();
    //otra alternativa es usando startsWith
    VehiculosFiltradosInput = Vehiculos.filter(Vehiculos => Vehiculos.name.toLowerCase().includes(textoBusqueda));

    templateCard = ""
    VehiculosFiltradosInput.forEach((Vehiculos) => {
        templateCard += `<div class="card">
        <img src="${Vehiculos.image}" alt="${Vehiculos.type} ${Vehiculos.id}">
        <p>${Vehiculos.name}</p>
        <a class="btn btn-danger" href="./info.html?id=${Vehiculos.id}">Mas info</a>
        </div>`;
    })
    
    contenedor_cards.innerHTML = templateCard;

   
}
}