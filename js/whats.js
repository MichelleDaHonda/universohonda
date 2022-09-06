function aparecer(){
  let Formulario = document.getElementById("formulario").style.display = "block"; document.getElementById("whatsapp01").style.display = "none";
}
function closer(){
  let CloseFormulario = document.getElementById("formulario").style.display = "none"; document.getElementById("whatsapp01").style.display = "block";
}

// FORMULÁRIO
function pegar(){
  let inicio = "https://api.whatsapp.com/send/?phone=5512981345104&text=Olá+me+chamo+";
  let fim = "&app_absent=0";
  let Nome = document.getElementById("name").value;
  let Email = document.getElementById("email").value;
  let Mensagem = document.getElementById("mensagem").value;
  
 window.location.href = inicio + Nome + "+meu email é:+" + Email + "+. +" + Mensagem + fim;
}
