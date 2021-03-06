$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.navbar').addClass('sticky');
            
        } else {
            $('.navbar').removeClass('sticky')
        }
    })
    //toggle menu/navbar script
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass('active');
        $('.menu-btn i').toggleClass('active');
    })

    // typed animation script
    var typed = new Typed(".typing", {
        strings: ["FullStack Software Engineer", "Leader", "Team Player", "Competitor"],
        typeSpeed: 100,
        hackSpeed: 60,
        loop: true
    })

    var typed = new Typed(".typing2", {
        strings: ["FullStack Software Engineer", "Leader", "Team Player", "Competitor"],
        typeSpeed: 100,
        hackSpeed: 60,
        loop: true
    })

    var typed = new Typed(".typing3", {
        strings: ["Connect With Me", "Talk to Me", "Click Links Below"],
        typeSpeed: 100,
        hackSpeed: 60,
        loop: true
    })

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    })
})

