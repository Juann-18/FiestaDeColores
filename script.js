// variables
const texto = document.getElementById('texto');
const colorMTX = document.getElementById('colorMas');
const coloresContador = {};
let tiempo;

// sonidos 
const sonidos = [
    new Audio('sonidos/campana.mp3'),
    new Audio('sonidos/pii.mp3'),
    new Audio('sonidos/tambor.mp3')
];


// cambia el color del texto 
function TextoColor(colorTexto) {
    texto.style.color = colorTexto;
    colorMTX.style.color = colorTexto;
    colorMasEscogido(colorTexto);
    reiniciarTempo();
}

// genera un color aleatorio
function colorAleatorio() {
    const digitos = '0123456789ABCDEF'; 
    let colorHex = '#';

    for (let i = 0; i < 6; i++) {
        let indiceAleatorio = Math.floor(Math.random() * 16);
        colorHex += digitos[indiceAleatorio];
    }
    return colorHex;
}

// agrega un circulo nuevo
function AgregarCirculo() {
    let color = colorAleatorio();

    const nuevoCirculo = document.createElement('div');
    nuevoCirculo.className = 'circulo';
    nuevoCirculo.style.backgroundColor = color;
    nuevoCirculo.addEventListener('click', function () {
        TextoColor(color);
        reproducirSonidoAleatorio(); 
    });
    document.querySelector('.circulos-container').appendChild(nuevoCirculo);
}

// reinicia los circulos
function reiniciar() {
    const contenedor = document.querySelector('.circulos-container');
    contenedor.innerHTML = '';
    TextoColor('black');

    const circulo1 = document.createElement('div');
    circulo1.className = 'circulo';
    circulo1.style.backgroundColor = '#FF0000';
    circulo1.addEventListener('click', function () {
        TextoColor('#FF0000');
        reproducirSonidoAleatorio();
    });

    const circulo2 = document.createElement('div');
    circulo2.className = 'circulo';
    circulo2.style.backgroundColor = '#008000';
    circulo2.addEventListener('click', function () {
        TextoColor('#008000');
        reproducirSonidoAleatorio();
    });

    const circulo3 = document.createElement('div');
    circulo3.className = 'circulo';
    circulo3.style.backgroundColor = '#0000FF';
    circulo3.addEventListener('click', function () {
        TextoColor('#0000FF');
        reproducirSonidoAleatorio();
    });

    contenedor.appendChild(circulo1);
    contenedor.appendChild(circulo2);
    contenedor.appendChild(circulo3);

    for (let color in coloresContador) {
        coloresContador[color] = 0;
    }
    colorMTX.textContent = 'Color más popular: ---';
}

// muestra el color más escogido 
function colorMasEscogido(color) {
    //definido
    if (color) {
        if (!coloresContador[color]) {
            coloresContador[color] = 1;
        } else {
            coloresContador[color]++;
        }
    }

    let contar = 0;
    let maxColor = '---';
    for (let i in coloresContador) {
        if (coloresContador[i] > contar) {
            contar = coloresContador[i];
            maxColor = i;
        }
    }
    colorMTX.textContent = `Color más escogido: ${maxColor}`;
}

// reinicia despues de 10s
function reiniciarTempo() {
    clearTimeout(tiempo);
    tiempo = setTimeout(reiniciar, 10000);
}

// reproduce un sonido aleatorio
function reproducirSonidoAleatorio() {
    const sonidoAleatorio = sonidos[Math.floor(Math.random() * sonidos.length)];
    sonidoAleatorio.play();
}

document.getElementById('circulo1').addEventListener('click', function () {
    TextoColor('#FF0000');
    reproducirSonidoAleatorio(); 
});
document.getElementById('circulo2').addEventListener('click', function () {
    TextoColor('#008000');
    reproducirSonidoAleatorio();
});
document.getElementById('circulo3').addEventListener('click', function () {
    TextoColor('#0000FF');
    reproducirSonidoAleatorio();
});
