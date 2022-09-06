const btnDentro = document.getElementById('btn-dentro');


function voltarMenu(){
    const nav = document.getElementById('nav');
    nav.classList.toggle('desative');
}


btnDentro.addEventListener('click', voltarMenu)
