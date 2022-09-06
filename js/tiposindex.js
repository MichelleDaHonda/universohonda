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
