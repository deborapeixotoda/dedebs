alert('hello world!')
function tocaSomPom(){
    document.querySelector('#som_toca_pom').play();
}

document.querySelector('.tecla_pom').onclick = tocaSomPom;