$(document).ready(function(){

    $('.slider-active').owlCarousel({
        loop:true,
        nav:false,
        autoplay:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })

    // Testimonial 
    
    $('.testimonial-active').owlCarousel({
        loop:true,
        nav:true,
        dots:true,
        autoplay:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:2
            }
        }
    })

    // Blog 

    $('.blog-active').owlCarousel({
        loop:true,
        dots:true,
        autoplay:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:2
            }
        }
    })

// Brand 
$('.brand-active').owlCarousel({
    loop:true,
    dots:true,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:5
        }
    }
})

})