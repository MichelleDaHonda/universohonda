var cbr = document.getElementById('cbr-motos');
var submenu = document.getElementById('submenu');

function baixarMenu(){
    submenu.style.height = '152px';
    submenu.style.transition ='all 0.3s ease';
}

function voltarMenu(){
    submenu.style.height = '70px';
    submenu.style.transition ='all 0.3s ease';
}

cbr.addEventListener('mouseover', baixarMenu);
cbr.addEventListener('mouseout', voltarMenu);




function baixarMenu(){
    submenu.style.height = '152px';
    submenu.style.transition ='all 0.3s ease';
}

function voltarMenu(){
    submenu.style.height = '70px';
    submenu.style.transition ='all 0.3s ease';
}

submenu.addEventListener('mouseover', baixarMenu);
submenu.addEventListener('mouseout', voltarMenu);
