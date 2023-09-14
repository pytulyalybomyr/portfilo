$('.burger-close').click(function () {
    $('.header-burger__main').addClass("hide")
    console.log("Sasasas")
});

$('.burger-open').click(function () {
    $('.header-burger__main').removeClass('hide');

});

function scrollTo(element) {
    window.scroll({
        left: 0,
        top: element.offsetTop,
        behavior: 'smooth'
    })
}

var b_proj = $('.b-proj');
var proj = document.querySelector("#proj")

var b_home = $('.b-home');
var home = document.querySelector("#home")

var b_contact = $('.b-contact');
var contact = document.querySelector("#contact")

$('.b-proj').click(function () {
    scrollTo(proj);
})

$('.b-home').click(function () {
    scrollTo(home);
})

$('.b-contact').click(function () {
    scrollTo(contact);
})

// $(window).on("scroll", function () {
//     if ($(window).scrollTop() > 150) {
//         console.log($(window).scrollTop())
//     }
// });