$(documents).ready(function(){

    $('.menu a').each (function(index, elemento){
        $(this).css({
            'top':'-200px'
        });
        $(this).animate({
            top: '0'
        }, 2000 + (index * 500));
    });

    if($(window).widh() > 800 ){
        $('header .textos').css ({
            opacity: 0,
            marginTop: 0
        });
        $('header .textos').animate ({
            opacity: 1,
            marginTop: '-52px'
        }, 1500);
    }

    var acercaDe = $('acerca-de').ofset().top,
        menu = $('#platillos').ofset().top,
        galeria = $('#galeria').ofset().top,
        ubicacion = $('#ubicacion').ofset().top;

    $('#btn-acerca-de').on('click', function(){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: acercaDe -100
        }, 500);
    });
    $('#btn-menu').on('click', function(){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: menu
        }, 500);
    });
    $('#btn-galeria').on('click', function(){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: galeria
        }, 500);
    });
    $('#btn-ubicacion').on('click', function(){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: ubicacion
        }, 500);
    });

});