$(window).on('beforeunload', function () {
    $(window).scrollTop(0);
});

let btnVerMais = document.querySelector('#div-btn-ver-mais');

btnVerMais.addEventListener('click', function () {
    let idSection = 'section-sobre-detalhes';
    var elementSection = document.getElementById(idSection);
    elementSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
});

