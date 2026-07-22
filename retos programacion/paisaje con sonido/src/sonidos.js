const pajaros = new Howl({
    src: ['./sounds/pajaros.mp3'],
    loop: true,
    volume: 0.4
});

const viento = new Howl({
    src: ['./sounds/viento.mp3'],
    loop: true,
    volume: 0.3
});


const campanaBici = new Howl({
    src: ['./sounds/campana.mp3'],
    volume: 0.6
});

let sonidoActivo = false; // variable para controlar el estado del sonido activado/desactivado

// función para activar/desactivar el sonido
function toggleSonido() {
    const boton = document.getElementById('btn-sonido');

    if (!sonidoActivo) { // si el sonido está desactivado, se activa
        pajaros.play(); // se reproduce el sonido de los pájaros
        viento.play(); // se reproduce el sonido del viento
        sonidoActivo = true; // se cambia el estado a activado
        boton.textContent = '🔊 Sonido ON'; // se cambia el texto del botón
        boton.classList.add('activo'); // se agrega la clase activo
    } else {
        pajaros.pause(); // se pausa el sonido de los pájaros
        viento.pause(); // se pausa el sonido del viento
        sonidoActivo = false; // se cambia el estado a desactivado
        boton.textContent = '🔇 Sonido OFF'; // se cambia el texto del botón
        boton.classList.remove('activo'); // se elimina la clase activo
    }
}

// Eventos
document.addEventListener('DOMContentLoaded', function () { // cuando se carga el DOM
    const bici = document.getElementById('bici'); // se obtiene el elemento bici
    if (bici) { // si el elemento bici existe
        bici.style.cursor = 'pointer'; // se cambia el cursor a pointer
        bici.addEventListener('click', function () { // cuando se hace clic en la     bici
            campanaBici.play();   // se reproduce el sonido de la campana
        });
    }

    const boton = document.getElementById('btn-sonido'); // se obtiene el elemento botón
    if (boton) { // si el elemento botón existe
        boton.addEventListener('click', toggleSonido);
    }
});
