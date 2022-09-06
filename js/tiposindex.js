const sportimg = document.getElementById('sportimg');


sportimg.onmouseover = function(){
    const psport = document.getElementById('psport');

    psport.style.display = 'block';
    sportimg.style.opacity = '0.5';
}

sportimg.onmouseout = function(){
    const psport = document.getElementById('psport');

    psport.style.display = 'none';
    sportimg.style.opacity = '1';
}


const advimg = document.getElementById('advimg');


advimg.onmouseover = function(){
    const padv = document.getElementById('padv');

    padv.style.display = 'block';
    
    advimg.style.opacity = '0.5';
    
}

advimg.onmouseout = function(){
    const padv = document.getElementById('padv');

    padv.style.display = 'none';
    advimg.style.opacity = '1';
}
