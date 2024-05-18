let btnVerMais = document.querySelector('#div-btn-ver-mais');

btnVerMais.addEventListener('click', function() {
    let idSection       = 'section-sobre-catalogo';
    var elementSection  = document.getElementById(idSection); 
    elementSection.scrollIntoView({
        behavior    : "smooth", 
        block       : "start"
    });
});
