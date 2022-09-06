// Gallery spotlight functionality
// Get nodes
const modal = document.getElementById('myModal');
const modalImg = document.getElementById("img01");
const captionText = document.getElementById("caption");
const context = document.getElementsByClassName('parent')[0];
const contextImgs = context.getElementsByTagName('img');
const targetImgs = [];

// Get target images
Array.from(contextImgs).forEach(function(img,index) {
  if (img.classList[0] == 'modal-content') { return; }
  else { targetImgs.push(img); }
});

// Open the modal when click on img
targetImgs.forEach(function(img,index){
  img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }
});
    
// Close the modal 
modal.onclick = function() {
  img01.className += " out";
  setTimeout(function() {
    modal.style.display = "none";
    img01.className = "modal-content";
  }, 400);  
}    
