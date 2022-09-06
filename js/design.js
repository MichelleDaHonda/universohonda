const btnConceito = document.getElementById('btn-conceito');
const btnCiclistica = document.getElementById('btn-ciclistica');
const btnDetalhes = document.getElementById('btn-detalhes');

function mostrarP(){
    const p = document.getElementById('p-conceito');
    const design = document.getElementById('design-bg');
    const pCiclistica = document.getElementById('p-ciclistica');
    const btnConceito = document.getElementById('btn-conceito');
    const pDetalhes = document.getElementById('p-detalhes');
    const btnDetalhes = document.getElementById('btn-detalhes');

    pDetalhes.style.display ='none'
    p.style.display = 'block';
    p.style.position = 'absolute';
    design.style.backgroundImage = "url(./img/cbrbg2.jpg)";
    pCiclistica.style.display = 'none';
    btnConceito.style.borderBottom = '3px solid #c00c00';
    btnCiclistica.style.borderBottom = 'none';
    btnDetalhes.style.borderBottom = 'none';
    
}

function mostrarPCiclistica(){
    const pCiclistica = document.getElementById('p-ciclistica');
    const btnCiclistica = document.getElementById('btn-ciclistica');
    const design = document.getElementById('design-bg');
    const p = document.getElementById('p-conceito');
    const pDetalhes = document.getElementById('p-detalhes');
    pCiclistica.style.display = 'block';
    pCiclistica.style.position = 'absolute';
    design.style.backgroundImage = "url(./img/cbrpreta.webp)";
    p.style.display = 'none';
    pDetalhes.style.display ='none'
    btnCiclistica.style.borderBottom = '3px solid #c00c00';
    btnConceito.style.borderBottom = 'none';
    btnDetalhes.style.borderBottom = 'none';
}


function mostrarPDetalhes(){
    const pCiclistica = document.getElementById('p-ciclistica');
    const design = document.getElementById('design-bg');
    const p = document.getElementById('p-conceito');
    const pDetalhes = document.getElementById('p-detalhes');
const btnConceito = document.getElementById('btn-conceito');
const btnCiclistica = document.getElementById('btn-ciclistica');
const btnDetalhes = document.getElementById('btn-detalhes');
    
    pCiclistica.style.display = 'none';
    pCiclistica.style.position = 'absolute';
    design.style.backgroundImage = "url(./img/detalhes.png)";
    p.style.display = 'none';
    pDetalhes.style.display ='block';
    btnDetalhes.style.borderBottom = '3px solid #c00c00';
     btnCiclistica.style.borderBottom = 'none';
    btnConceito.style.borderBottom = 'none';
}

btnConceito.addEventListener('click', mostrarP);
btnCiclistica.addEventListener('click', mostrarPCiclistica);
btnDetalhes.addEventListener('click', mostrarPDetalhes);



