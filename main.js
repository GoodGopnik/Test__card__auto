$('.multiple-items').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: "<img src='./img/Rectangle 6 copy 2.svg' class='arrow__prev' alt=''>",
    nextArrow: "<img src='./img/Rectangle 6 copy 2.svg' class='arrow__next' alt=''>",
});

let headerBlockNavSearchLp = document.querySelector('.header__block__nav__search__lp');
let headerBlockNavSearchInput = document.querySelector('.header__block__nav__search__input');
let headerBlockNavMenu = document.querySelector('.header__block__nav__menu');
let headerBlockNavHeden = document.querySelector('.header__block__nav__heden');
let aboutBlockRightBtn = document.querySelector('.about__block__right__btn');
let aboutBlockRightBlockTextLorem = document.querySelector('.about__block__right__block__text__lorem');
let aboutBlockRightSlider = document.querySelector('.about__block__right__slider');
let arrowPrev = document.querySelector('.arrow__prev');
let arrowNext = document.querySelector('.arrow__next');
let aboutBlockLeftMediaImg = document.querySelector('.about__block__left__media__img');
let aboutBlockRight = document.querySelector('.about__block__right');
let headerBlockNavHedenClose = document.querySelector('.header__block__nav__heden__close')

headerBlockNavSearchLp.addEventListener('click', () => {
    headerBlockNavSearchInput.classList.toggle ('header__block__nav__search__input__back')
})
headerBlockNavMenu.addEventListener('click', () => {
    headerBlockNavHeden.classList.toggle ('header__block__nav__heden__display')
})
headerBlockNavHedenClose.addEventListener('click', () => {
    headerBlockNavHeden.classList.toggle ('header__block__nav__heden__display')
})
aboutBlockRightBtn.addEventListener('click', () => {
    aboutBlockRightBlockTextLorem.classList.toggle ('about__block__right__block__text__lorem__display');
    aboutBlockRightSlider.classList.toggle ('about__block__right__slider__display');
    arrowPrev.classList.toggle ('arrow__prev__display');
    arrowNext.classList.toggle ('arrow__next__display');
})
aboutBlockLeftMediaImg.addEventListener('click', () => {
    aboutBlockRight.classList.toggle ('about__block__right__display')
})