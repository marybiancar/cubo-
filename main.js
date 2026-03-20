const cube = document.getElementById('cube');
const scene = document.body; // Escuta o movimento em toda a tela
const gap = 90; // 80px da peça + 10px de espaçamento

// 1. Criar as 27 peças do cubo
function createCube() {
    for (let x = -1; x <= 1; x++) {
        for (let y = -1; y <= 1; y++) {
            for (let z = -1; z <= 1; z++) {
                const piece = document.createElement('div');
                piece.className = 'piece';

                const faces = ['front', 'back', 'right', 'left', 'top', 'bottom'];
                faces.forEach(f => {
                    const faceDiv = document.createElement('div');
                    faceDiv.className = `face ${f}`;
                    piece.appendChild(faceDiv);
                });

                // Posicionamento com espaçamento
                const tx = x * gap;
                const ty = y * gap;
                const tz = z * gap;

                piece.style.transform = `translate3d(${tx}px, ${ty}px, ${tz}px)`;
                cube.appendChild(piece);
            }
        }
    }
}

// 2. Movimentação baseada no mouse
scene.addEventListener('mousemove', (e) => {
    // Calcula a rotação baseada na posição do mouse em relação ao centro
    const xRotation = (window.innerHeight / 2 - e.pageY) / 10;
    const yRotation = (e.pageX - window.innerWidth / 2) / 10;

    cube.style.transform = `rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
});

// Resetar posição quando o mouse sai (opcional)
scene.addEventListener('mouseleave', () => {
    cube.style.transform = `rotateX(-20deg) rotateY(-20deg)`;
});

createCube();