alert('hello world!')
function tocaSomPom(){
    document.querySelector('#som_toca_pom').play();
}

document.querySelector('.tecla_clap').onclick = tocaSomPom;
function tocaSomClap(){
    document.querySelector('#som_toca_clap').play();
}

document.querySelector('.tecla_clap').onclick = tocaSomClap;