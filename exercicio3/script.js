let shiftPressed = false;

const paragrafo = document.getElementById('mensagem');

document.addEventListener('keydown', (event) => {
    if (event.shiftKey) {
        paragrafo.innerHTML = 'ATENÇÃO: SEGURANDO SHIFT';
        shiftPressed = true;
    }
});

document.addEventListener('keyup', (event) => {
    if (shiftPressed) {
        paragrafo.innerHTML = '';
        shiftPressed = false;
    }
});
