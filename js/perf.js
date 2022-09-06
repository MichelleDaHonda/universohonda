const btnMotor = document.getElementById('btn-motor');
const btnEmbre = document.getElementById('btn-embre');


function mostrarPMotor(){
    const pMotor = document.getElementById('p-motor');
    const pEmbre = document.getElementById('p-embre');
   
    const btnMotor = document.getElementById('btn-motor');
const btnEmbre = document.getElementById('btn-embre');


   
    pMotor.style.display = 'block';
    pMotor.style.position = 'absolute';
    pEmbre.style.display ='none'
   
    btnMotor.style.borderBottom = '3px solid #c00c00';
   
    btnEmbre.style.borderBottom = 'none';
    
}

function mostrarPEmbre(){
     const pMotor = document.getElementById('p-motor');
    const pEmbre = document.getElementById('p-embre');
    
    const btnMotor = document.getElementById('btn-motor');
const btnEmbre = document.getElementById('btn-embre');


   
  pEmbre.style.display = 'block';
    pEmbre.style.position = 'absolute';
    pMotor.style.display ='none'
   
    btnEmbre.style.borderBottom = '3px solid #c00c00';
   
    btnMotor.style.borderBottom = 'none';
    
}




btnMotor.addEventListener('click', mostrarPMotor);
btnEmbre.addEventListener('click', mostrarPEmbre);
