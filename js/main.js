//text carousel
$('#text-carousel').owlCarousel({
    rtl: true,
    loop: false,
    margin: 50,
    smartSpeed: 1000,
    nav: false,
    startPosition: -1,
    dots: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});
//project
$('#projects-carousel').owlCarousel({
    rtl: true,
    loop: false,
    margin: 50,
    smartSpeed: 500,
    nav: false,
    startPosition: -1,
    dots: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        769: {
            items: 2
        },
        1000: {
            items: 2
        },
        1200: {
            items: 2
        },
        1201: {
            items: 3
        }
    }
});
//team
$('#team-carousel').owlCarousel({
    rtl: true,
    loop: false,
    margin: 50,
    smartSpeed: 500,
    nav: false,
    startPosition: -1,
    dots: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        769: {
            items: 2
        },
        1000: {
            items: 2
        },
        1200: {
            items: 2
        },
        1201: {
            items: 3
        }
    }
});
//show & hide block
$(function () {
    $('#btn-down').on('click', function (e) {
        $('#subscribe-toggle').fadeToggle(function () {
            console.log($(e.target).is(':visible'));
            $(e.target).text($(this).is(':visible') ? 'up' : 'down');
        });
    });
});