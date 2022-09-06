const sportimg = document.getElementById('sportimg');
const psport = document.getElementById('psport');
const padv = document.getElementById('padv');

sportimg.onmouseover = function(){
    const psport = document.getElementById('psport');

    psport.style.display = 'flex';
   
    sportimg.style.opacity = '0.5';
    sportimg.style.transform = 'scale(1.4)';
    
}

sportimg.onmouseout = function(){
    const psport = document.getElementById('psport');

    psport.style.display = 'none';
    sportimg.style.opacity = '1';
    sportimg.style.transform = 'scale(1)';
}

psport.onmouseover =function(){
    sportimg.style.transform = 'scale(1.4)';
}


const advimg = document.getElementById('advimg');


advimg.onmouseover = function(){
    const padv = document.getElementById('padv');

    padv.style.display = 'block';
    advimg.style.transform = 'scale(1.4)';
    advimg.style.opacity = '0.5';
    
}

advimg.onmouseout = function(){
    const padv = document.getElementById('padv');
    advimg.style.transform = 'scale(1)';
    padv.style.display = 'none';
    advimg.style.opacity = '1';
}

padv.onmouseover =function(){
    advimg.style.transform = 'scale(1.4)';
}





const streetimg = document.getElementById('streetimg');


streetimg.onmouseover = function(){
    const pstreet = document.getElementById('pstreet');

    pstreet.style.display = 'block';
    streetimg.style.transform = 'scale(1.4)';
    streetimg.style.opacity = '0.5';
    
}

streetimg.onmouseout = function(){
    const pstreet = document.getElementById('pstreet');
    streetimg.style.transform = 'scale(1)';
    pstreet.style.display = 'none';
    streetimg.style.opacity = '1';
}

pstreet.onmouseover =function(){
    streetimg.style.transform = 'scale(1.4)';
}





const tourimg = document.getElementById('tourimg');


tourimg.onmouseover = function(){
    const ptour = document.getElementById('ptour');

    ptour.style.display = 'block';
    tourimg.style.transform = 'scale(1.4)';
    tourimg.style.opacity = '0.5';
    
}

tourimg.onmouseout = function(){
    const ptour = document.getElementById('ptour');
    tourimg.style.transform = 'scale(1)';
    ptour.style.display = 'none';
    tourimg.style.opacity = '1';
}

ptour.onmouseover =function(){
    tourimg.style.transform = 'scale(1.4)';
}
