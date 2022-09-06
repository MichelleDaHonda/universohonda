const btnmotor = document.getElementById('btnmotor');
const btnsis = document.getElementById('btnsis');
const btncap = document.getElementById('btncap');
const btndim = document.getElementById('btndim');
const btnchassi = document.getElementById('btnchassi');

function mostrarPMotor2(){
    const pmotor = document.getElementById('pmotor');
    const psis = document.getElementById('psis');
    const pcap = document.getElementById('pcap');
    const pdim = document.getElementById('pdim');
    const pchassi = document.getElementById('pchassi');
  const btnmotor = document.getElementById('btnmotor');
const btnsis = document.getElementById('btnsis');
const btncap = document.getElementById('btncap');
const btndim = document.getElementById('btndim');
const btnchassi = document.getElementById('btnchassi');


   
    pmotor.style.display = 'block';
    pmotor.style.position = 'absolute';
    psis.style.display ='none'
    pcap.style.display ='none'
    pdim.style.display ='none'
    pchassi.style.display ='none'
    
    btnmotor.style.borderBottom = '3px solid #c00c00';
    btnsis.style.borderBottom = 'none';
    btncap.style.borderBottom = 'none';
    btndim.style.borderBottom = 'none';
    btnchassi.style.borderBottom = 'none';
}

function mostrarPSis(){
     const pmotor = document.getElementById('pmotor');
    const psis = document.getElementById('psis');
    const pcap = document.getElementById('pcap');
    const pdim = document.getElementById('pdim');
    const pchassi = document.getElementById('pchassi');
  const btnmotor = document.getElementById('btnmotor');
const btnsis = document.getElementById('btnsis');
const btncap = document.getElementById('btncap');
const btndim = document.getElementById('btndim');
const btnchassi = document.getElementById('btnchassi');


   
    psis.style.display = 'block';
    psis.style.position = 'absolute';
    pmotor.style.display ='none'
    pcap.style.display ='none'
    pdim.style.display ='none'
    pchassi.style.display ='none'
    
     btnsis.style.borderBottom = '3px solid #c00c00';
    btnmotor.style.borderBottom = 'none';
    btncap.style.borderBottom = 'none';
    btndim.style.borderBottom = 'none';
    btnchassi.style.borderBottom = 'none';
    
}





function mostrarPCap(){
     const pmotor = document.getElementById('pmotor');
    const psis = document.getElementById('psis');
    const pcap = document.getElementById('pcap');
    const pdim = document.getElementById('pdim');
    const pchassi = document.getElementById('pchassi');
  const btnmotor = document.getElementById('btnmotor');
const btnsis = document.getElementById('btnsis');
const btncap = document.getElementById('btncap');
const btndim = document.getElementById('btndim');
const btnchassi = document.getElementById('btnchassi');


   
    pcap.style.display = 'block';
    pcap.style.position = 'absolute';
    pmotor.style.display ='none'
    psis.style.display ='none'
    pdim.style.display ='none'
    pchassi.style.display ='none'
    
     btncap.style.borderBottom = '3px solid #c00c00';
    btnsis.style.borderBottom = 'none';
    btnmotor.style.borderBottom = 'none';
    btndim.style.borderBottom = 'none';
    btnchassi.style.borderBottom = 'none';
    
}



function mostrarPDim(){
     const pmotor = document.getElementById('pmotor');
    const psis = document.getElementById('psis');
    const pcap = document.getElementById('pcap');
    const pdim = document.getElementById('pdim');
    const pchassi = document.getElementById('pchassi');
  const btnmotor = document.getElementById('btnmotor');
const btnsis = document.getElementById('btnsis');
const btncap = document.getElementById('btncap');
const btndim = document.getElementById('btndim');
const btnchassi = document.getElementById('btnchassi');


   
    pdim.style.display = 'block';
    pdim.style.position = 'absolute';
    pmotor.style.display ='none'
    pcap.style.display ='none'
    pcap.style.display ='none'
    pchassi.style.display ='none'
    
     btndim.style.borderBottom = '3px solid #c00c00';
    btnsis.style.borderBottom = 'none';
    btncap.style.borderBottom = 'none';
    btnmotor.style.borderBottom = 'none';
    btnchassi.style.borderBottom = 'none';
    
}



function mostrarPChassi(){
     const pmotor = document.getElementById('pmotor');
    const psis = document.getElementById('psis');
    const pcap = document.getElementById('pcap');
    const pdim = document.getElementById('pdim');
    const pchassi = document.getElementById('pchassi');
  const btnmotor = document.getElementById('btnmotor');
const btnsis = document.getElementById('btnsis');
const btncap = document.getElementById('btncap');
const btndim = document.getElementById('btndim');
const btnchassi = document.getElementById('btnchassi');


   
    pchassi.style.display = 'block';
    pchassi.style.position = 'absolute';
    pmotor.style.display ='none'
    pcap.style.display ='none'
    pdim.style.display ='none'
    psis.style.display ='none'
    
     btnchassi.style.borderBottom = '3px solid #c00c00';
    btnsis.style.borderBottom = 'none';
    btncap.style.borderBottom = 'none';
    btndim.style.borderBottom = 'none';
    btnmotor.style.borderBottom = 'none';
    
}




btnmotor.addEventListener('click', mostrarPMotor2);
btnsis.addEventListener('click', mostrarPSis);
btncap.addEventListener('click', mostrarPCap);
btndim.addEventListener('click', mostrarPDim);
btnchassi.addEventListener('click', mostrarPChassi);
