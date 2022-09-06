
document.addEventListener("scroll", function() {
    var posicaoy = window.pageYOffset;
    const nav = document.getElementById('nav');
  if (posicaoy == 0) {
      nav.style.backgroundColor = 'rgba(0,0,0,.00)';
  } else {
      nav.style.backgroundColor = "rgb(0,0,0.5)";
  }
});
