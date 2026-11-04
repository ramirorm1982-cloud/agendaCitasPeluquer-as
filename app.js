

let citas = [
    { cliente: "Ana", servicio: "Corte", precio: 25 },
    { cliente: "Luis", servicio: "Barba", precio: 15 }
];


const listaCitas = document.querySelector("#listaCitas");
function mostrarCitas() {
    listaCitas.innerHTML = "";
    for (const cita of citas) {
        const tarjeta = document.createElement("div");
        tarjeta.classList.add("cita");
        tarjeta.innerHTML = `
            <h3>${cita.cliente}</h3>
            <p>${cita.servicio}</p>
            <p class="precio">${cita.precio} €</p>
        `;
        listaCitas.appendChild(tarjeta);
    }
   
}


const totalCitas = document.querySelector("#totalCitas");
function actualizarContador() {
    totalCitas.textContent = citas.length;
}

const importeTotal = document.querySelector("#importeTotal");
function calcularImporte() {
    let total = 0;
    for (const cita of citas) {
        total += cita.precio;
    }
    importeTotal.textContent = `${total} €`;
}
    calcularImporte();
    actualizarContador();


function agregarCita() {
    const cliente = document.querySelector("#cliente").value;
    const servicio = document.querySelector("#servicio").value;
    const precio = Number(document.querySelector("#precio").value);

    citas.push({ cliente, servicio, precio });

   listaCitas.innerHTML += `
    <div class="cita">
        <h3>${cliente}</h3>
        <p>${servicio}</p>
        <p class="precio">${precio} €</p>
    </div>
`;
actualizarContador();
calcularImporte();
    
}

mostrarCitas();





function mostrarServicioSemana() {
    const mensaje = document.querySelector("#mensajeReto");

    mensaje.innerHTML = `
        <h3>✨ Servicio de la semana</h3>
        <p><strong>Tratamiento de hidratación capilar</strong></p>
        <p>Devuelve el brillo y la suavidad a tu cabello.</p>
        <p>Precio especial: 25 €</p>
    `;
}

function mostrarConsejoPeluqueria() {
    const mensaje = document.querySelector("#mensajeReto");

    mensaje.innerHTML = `
        <h3>💇 Consejo de peluquería</h3>
        <p>Evita lavar tu cabello con agua demasiado caliente.</p>
        <p>Utiliza un champú adecuado para tu tipo de cabello
        y aplica acondicionador en las puntas.</p>
    `;
}


