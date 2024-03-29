var swiper = new Swiper(".myswiper-event", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: true,
    },
    // pagination: {
    //     el: ".swiper-pagination",
    //     clickable: true,
    // },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var swiper = new Swiper(".mySwiper-mobile", {
    slidesPerView: 15,
    spaceBetween: 60,
    freeMode: false,
    centeredSlides: false,
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    // },
    // pagination: {
    //     el: ".swiper-pagination",
    //     clickable: true,
    // },
    // navigation: {
    //     nextEl: ".swiper-button-next",
    //     prevEl: ".swiper-button-prev",
    // },
});
var swiper = new Swiper(".mySwiper-feat", {
    slidesPerView: 5,
    spaceBetween: 30,
    freeMode: false,
    pagination: {
        el: ".swiper-pagination-features",
        clickable: true,
    },
});

$(document).ready(function (brandSlider) {

    var slideCount = $('#brand-discount-slider ul li').length;
    var slideWidth = $('#brand-discount-slider ul li').width();
    var slideHeight = $('#brand-discount-slider ul li').height();
    var sliderUlWidth = slideCount * slideWidth;

    $('#brand-discount-slider').css({ width: slideWidth, height: slideHeight });

    $('#brand-discount-slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });

    $('#brand-discount-slider ul li:last-child').prependTo('#brand-discount-slider ul');


    function moveLeft() {
        $('#brand-discount-slider ul').animate({
            left: + slideWidth
        }, 200, function () {
            $('#brand-discount-slider ul li:last-child').prependTo('#brand-discount-slider ul');
            $('#brand-discount-slider ul').css('left', '');
        });
    };

    function moveRight() {
        $('#brand-discount-slider ul').animate({
            left: - slideWidth
        }, 200, function () {
            $('#brand-discount-slider ul li:first-child').appendTo('#brand-discount-slider ul');
            $('#brand-discount-slider ul').css('left', '');
        });
    };


    $('.brand-arrow-prev').click(function () {
        moveLeft();
    });

    $('.brand-arrow-next').click(function () {
        moveRight();
    });


    setTimeout(moveLeft(), 1000); /* works only on load for the first slider...research later*/
});