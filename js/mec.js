const btnRoda = document.getElementById('btn-roda');
const btnSusp = document.getElementById('btn-susp');
const btnChassi = document.getElementById('btn-chassi');

function mostrarPRoda(){
    const pRoda = document.getElementById('p-roda');
    const pSusp = document.getElementById('p-susp');
    const pChassi = document.getElementById('p-chassi');
    const btnRoda = document.getElementById('btn-roda');
const btnSusp = document.getElementById('btn-susp');
const btnChassi = document.getElementById('btn-chassi');

   
    pRoda.style.display = 'block';
    pRoda.style.position = 'absolute';
    pSusp.style.display ='none'
    pChassi.style.display = 'none';
    btnRoda.style.borderBottom = '3px solid #c00c00';
    btnSusp.style.borderBottom = 'none';
    btnChassi.style.borderBottom = 'none';
    
}

function mostrarPSusp(){
     const pRoda = document.getElementById('p-roda');
    const pSusp = document.getElementById('p-susp');
    const pChassi = document.getElementById('p-chassi');
    const btnRoda = document.getElementById('btn-roda');
const btnSusp = document.getElementById('btn-susp');
const btnChassi = document.getElementById('btn-chassi');

   
    pSusp.style.display = 'block';
    pSusp.style.position = 'absolute';
    pRoda.style.display ='none'
    pChassi.style.display = 'none';
    btnSusp.style.borderBottom = '3px solid #c00c00';
    btnRoda.style.borderBottom = 'none';
    btnChassi.style.borderBottom = 'none';
}


function mostrarPChassi(){
   const pRoda = document.getElementById('p-roda');
    const pSusp = document.getElementById('p-susp');
    const pChassi = document.getElementById('p-chassi');
    const btnRoda = document.getElementById('btn-roda');
const btnSusp = document.getElementById('btn-susp');
const btnChassi = document.getElementById('btn-chassi');

   
    pChassi.style.display = 'block';
    pChassi.style.position = 'absolute';
    pSusp.style.display ='none'
    pRoda.style.display = 'none';
    btnChassi.style.borderBottom = '3px solid #c00c00';
    btnSusp.style.borderBottom = 'none';
    btnRoda.style.borderBottom = 'none';
}

btnRoda.addEventListener('click', mostrarPRoda);
btnSusp.addEventListener('click', mostrarPSusp);
btnChassi.addEventListener('click', mostrarPChassi);
