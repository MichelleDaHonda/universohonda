const btnMobile = document.getElementById('btn-mobile');

function mostrarMenu(){
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
}

btnMobile.addEventListener('click', mostrarMenu);
