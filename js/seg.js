const btnFreioD = document.getElementById('btn-freiod');
const btnFreioE = document.getElementById('btn-freioe');
const btnAlerta = document.getElementById('btn-alerta');

function mostrarPFreioD(){
    const pFreioD = document.getElementById('p-freiod');
    const pFreioE = document.getElementById('p-freioe');
    const pAlerta = document.getElementById('p-alerta');
    const btnFreioD = document.getElementById('btn-freiod');
const btnFreioE = document.getElementById('btn-freioe');
const btnAlerta = document.getElementById('btn-alerta');

   
    pFreioD.style.display = 'block';
    pFreioD.style.position = 'absolute';
    pFreioE.style.display ='none'
    pAlerta.style.display = 'none';
    btnFreioD.style.borderBottom = '3px solid #c00c00';
    btnFreioE.style.borderBottom = 'none';
    btnAlerta.style.borderBottom = 'none';
    
}

function mostrarPFreioE(){
      const pFreioD = document.getElementById('p-freiod');
    const pFreioE = document.getElementById('p-freioe');
    const pAlerta = document.getElementById('p-alerta');
    const btnFreioD = document.getElementById('btn-freiod');
const btnFreioE = document.getElementById('btn-freioe');
const btnAlerta = document.getElementById('btn-alerta');

   
    pFreioE.style.display = 'block';
    pFreioE.style.position = 'absolute';
    pFreioD.style.display ='none'
    pAlerta.style.display = 'none';
    btnFreioE.style.borderBottom = '3px solid #c00c00';
    btnFreioD.style.borderBottom = 'none';
    btnAlerta.style.borderBottom = 'none';
}


function mostrarPAlerta(){
    const pFreioD = document.getElementById('p-freiod');
    const pFreioE = document.getElementById('p-freioe');
    const pAlerta = document.getElementById('p-alerta');
    const btnFreioD = document.getElementById('btn-freiod');
const btnFreioE = document.getElementById('btn-freioe');
const btnAlerta = document.getElementById('btn-alerta');

   
    pAlerta.style.display = 'block';
    pAlerta.style.position = 'absolute';
    pFreioE.style.display ='none'
    pFreioD.style.display = 'none';
    btnAlerta.style.borderBottom = '3px solid #c00c00';
    btnFreioE.style.borderBottom = 'none';
    btnFreioD.style.borderBottom = 'none';
}

btnFreioD.addEventListener('click', mostrarPFreioD);
btnFreioE.addEventListener('click', mostrarPFreioE);
btnAlerta.addEventListener('click', mostrarPAlerta);
