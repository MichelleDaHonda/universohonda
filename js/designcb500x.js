const btnConceito = document.getElementById('btn-conceito');
const btnCiclistica = document.getElementById('btn-ciclistica');


function mostrarP(){
    const p = document.getElementById('p-conceito');
    const design = document.getElementById('design-bg');
    const pCiclistica = document.getElementById('p-ciclistica');
    const btnConceito = document.getElementById('btn-conceito');
   

    
    p.style.display = 'block';
    p.style.position = 'absolute';
    design.style.backgroundImage = "url(./img/design1cb500x.jpg)";
    pCiclistica.style.display = 'none';
    btnConceito.style.borderBottom = '3px solid #c00c00';
    btnCiclistica.style.borderBottom = 'none';
   
    
}

function mostrarPCiclistica(){
    const pCiclistica = document.getElementById('p-ciclistica');
    const btnCiclistica = document.getElementById('btn-ciclistica');
    const design = document.getElementById('design-bg');
    const p = document.getElementById('p-conceito');
   
    pCiclistica.style.display = 'block';
    pCiclistica.style.position = 'absolute';
    design.style.backgroundImage = "url(./img/design2cb500x.jpg)";
    p.style.display = 'none';

    btnCiclistica.style.borderBottom = '3px solid #c00c00';
    btnConceito.style.borderBottom = 'none';
   
}



btnConceito.addEventListener('click', mostrarP);
btnCiclistica.addEventListener('click', mostrarPCiclistica);

