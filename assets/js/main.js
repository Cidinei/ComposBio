$(document).ready(function(){

    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 1000){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
        // scroll-down button show/hide script
        if(this.scrollY > 550){
            $('.scroll-down-btn').addClass("show");
        }else{
            $('.scroll-down-btn').removeClass("show");
        }
    });
    // scroll-up button click script (scroll to top)
    $(document).ready(function () {
        $('.home').attr('style', 'background: linear-gradient( rgba(0, 0, 0, 0.712),rgba(34, 26, 26, 0.651)), url(/assets/img/baner1.jpeg);  background-size: cover; min-height: 500px;');       // set background image
    
    });
    var imgsArray = ['/assets/img/baner1.jpeg', '/assets/img/baner2.jpeg', '/assets/img/baner2.jpeg'];
    
    setInterval(function () {
        for (var i = 0; i < imgsArray.length; i++) {
            $('.home').attr('style', 'background: linear-gradient( rgba(0, 0, 0, 0.712),rgba(34, 26, 26, 0.651)), url(' + imgsArray[i] + '); background-size: cover; min-height: 500px; loop: true;');
        }
    }, 5000);
    
    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Coleta", "Transporte", "Tratamento", "Reciclagem"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["a coleta.", "o tratamento.", "o transporte.", "a reciclagem."],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
   
    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});


