function validaBusca() {
    if (document.querySelector('#q').value == '') {
        alert('Não podia ter deixado em branco a busca!');
        return false;
    }
}

document.querySelector('#form-busca').onsubmit = validaBusca;

var banners = ["./img/papagaio-1.png", "./img/papagaio-2.png"];
var bannerAtual = 0;

function trocaBanner() {
    bannerAtual = (bannerAtual + 1) % 2;
    //document.querySelector('.destaque img').src = banners[bannerAtual];
    document.querySelector('#paragaio').src = banners[bannerAtual];
}
//setInterval(trocaBanner, 1000);

//function autoPlay(){
//    document.querySelector('#autoAtivar').onload = 
//}

var timer = setInterval(trocaBanner, 1000);

var controle = document.querySelector('.pause');
controle.onclick = pausar;

function pausar () {
    if (controle.className == 'pause') {
        clearInterval(timer);
        controle.className = 'play';
    } else {
        timer = setInterval(trocaBanner, 1000);
        controle.className = 'pause';
    } return false;
}
