let seuvotopara = document.querySelector('.d-1-1 span');
let cargo = document.querySelector('.d-1-2 span');
let descricao = document.querySelector('.d-1-4 ');
let aviso = document.querySelector('.d-2');
let lateral = document.querySelector('.d-1-right');
let numeros = document.querySelector('.d-1-3');

let etapaatual = 0;
let numero = '';

function comecaretapa() {
    let etapa = etapas[etapaatual];


    let numerohtml = '';

    for (let i = 0; i < etapa.numeros; i++) {
        if (i === 0) {
            numerohtml += ' <div class="numero pisca"></div>';
        }
        else {
            numerohtml += ' <div class="numero"></div>';
        }
    }


    seuvotopara.style.display = 'none';
    cargo.innerHTML = etapa.título;
    descricao.innerHTML = '';
    aviso.style.display = 'none';
    lateral.innerHTML = '';
    numeros.innerHTML = numerohtml;
}
function atualizainterface() {
    alert("FINALIZOU DE DIGITAR O VOTO!");
}


function clicou(n) {
    let elnumero = document.querySelector('.numero.pisca');
    if (elnumero !== null) {
        elnumero.innerHTML = n;
        numero = `${numero}${n}`;

        elnumero.classList.remove('pisca');
        if(elnumero.nextElementSibling !== null){
        elnumero.nextElementSibling.classList.add('pisca');
        }else{
            atualizainterface();
        }

    }
}
function branco() {
    alert("Clicou em Branco");
}

function corrige() {
    alert("Clicou em Corrige");
}

function confirma() {
    alert("Clicou em Confirma");
}



comecaretapa();