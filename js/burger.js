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

var b_proj = document.querySelector('.b-proj');
var proj = document.querySelector('#proj');

var b_home = document.querySelector('.b-home');
var home = document.querySelector('#home');

var b_contact = document.querySelector('.b-contact');
var contact = document.querySelector('#contact');

b_proj.addEventListener('click', () => {
    scrollTo(proj);
})

b_home.addEventListener('click', () => {
    scrollTo(home);
})

b_contact.addEventListener('click', () => {
    scrollTo(contact);
})