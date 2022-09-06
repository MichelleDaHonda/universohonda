let elem = document.getElementById('perc')
let doc = document.documentElement

window.addEventListener('scroll', function() {
    let value = parseInt(100 * doc.scrollTop / (doc.scrollHeight - doc.clientHeight))
    elem.innerHTML = value + '%';
    let fixo = document.getElementById('fixo');
    if(value > 32){
	fixo.style.position = 'fixed';
    }else if(value < 48){
	fixo.style.position = 'sticky'
    }
    })
