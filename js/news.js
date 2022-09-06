var button = document.querySelector('.button');
var field = document.querySelector('.field');
var icon = document.querySelector('.header i');
var text = document.querySelector('.header p');

button.addEventListener('click', function(){
  
  if(field.value === ''){
    field.placeholder = 'You must enter your email';
    // alert('You must enter an email');
  } else {
    icon.classList.toggle('animation');
    text.classList.toggle('show');
  }
});
