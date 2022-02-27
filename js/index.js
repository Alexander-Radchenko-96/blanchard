const select1 = new CustomSelect('#select-1');
const select2 = new CustomSelect('#select-2');
const select3 = new CustomSelect('#select-3');
const select4 = new CustomSelect('#select-4');
const select5 = new CustomSelect('#select-5');
// -------галерея
const select6 = new CustomSelect('#select-6');

// запускаем слайдер hero

const slider = document.querySelector('.swiper');
const slider1 = document.querySelector('.gallary-slider');
const slider2 = document.querySelector('.events-slider');
const slider3 = document.querySelector('.projects-slider');

let mySwiper = new Swiper(slider, {
    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 2000,
    },
})

// запускаем слайдер gallary

let mySwiper1 = new Swiper(slider1, {
    slidesPerView: 3,
    direction: 'horizontal',
    spaceBetween: 50,
    slidesPerGroup: 3,
    pagination: {
        el: '.gallary__swiper-pagination',
        type: 'fraction',
    },
    navigation: {
        nextEl: '.gallary__swiper-button-next',
        prevEl: '.gallary__swiper-button-prev',
    },
})

// Настраиваем слайдер секции events

let mySwiper2 = new Swiper(slider2, {
    slidesPerView: 3,
    direction: 'horizontal',
    spaceBetween: 50,
    slidesPerGroup: 3,
    navigation: {
        nextEl: '.events__swiper-button-next',
        prevEl: '.events__swiper-button-prev',
    },
})

// настраиваем слайдер секции projects

let mySwiper3 = new Swiper(slider3, {
    slidesPerView: 3,
    direction: 'horizontal',
    spaceBetween: 50,
    slidesPerGroup: 3,
    navigation: {
        nextEl: '.projects__swiper-button-next',
        prevEl: '.projects__swiper-button-prev',
    },
    loop: true,
})

// tultip в секции проекты

tippy('[data-tippy-content]');

// map to section map

ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map("map", {
        center: [55.758468, 37.601088],
        zoom: 14
    });

    var myPlacemark = new ymaps.Placemark([55.758468, 37.601088], {}, {
        iconLayout: 'default#image',
        iconImageHref: '../img/map/point.svg',
        iconImageSize: [20, 20],
    });
    myMap.geoObjects.add(myPlacemark);

    myMap.controls.remove('searchControl'); // удаляем поиск
    myMap.controls.remove('trafficControl'); // удаляем контроль трафика
    myMap.controls.remove('typeSelector'); // удаляем тип
    myMap.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    myMap.controls.remove('rulerControl'); // удаляем контрол правил
}

// фктивируем Аккордеон в секции catalog

$(function() {
    $("#accordion").accordion({
        heightStyle: "content",
        collapsible: true
    });
});

// табы в секции catalog

document.querySelectorAll('.catalog__items-info--link').forEach(function(tabsBtn) {
    tabsBtn.addEventListener('click', function(e) {
        const path = e.currentTarget.dataset.path;

        document.querySelectorAll('.catalog__items-info--link').forEach(function(btn) {
            btn.classList.remove('catalog-tabs')
        });
        document.querySelectorAll('.catalog-tabs').forEach(function(tabsBtn) {
            tabsBtn.classList.remove('catalog-tabs--activ')
        });
        document.querySelector(`[data-target="${path}"]`).classList.add('catalog-tabs--activ');
    });
});

// валидация формы
var selector = document.querySelector('input[type="tel"]');

var im = new Inputmask("+7 (999)-999-99-99");
im.mask(selector);

new JustValidate('.feedback-form', {
    rules: {
        name: {
            required: true,
            minLength: 2,
            maxLength: 20
        },
        tel: {
            required: true,
            function: (name, value) => {
                const phone = selector.inputmask.unmaskedvalue()
                return Number(phone) && phone.length === 10
            }
        }
    }
});

// модальные окна

const btns = document.querySelectorAll('.gallary-slide');
const modalsOverlay = document.querySelector('.modals__overlay');
const modal = document.querySelectorAll('.modal');

btns.forEach((el) => {
    el.addEventListener('click', (e) => {
        let path = e.currentTarget.getAttribute('data-path');

        modal.forEach((el) => {
            el.classList.remove('modal--visible')
        });

        document.querySelector(`[data-target="${path}"]`).classList.add('modal--visible')
        modalsOverlay.classList.add('modals__overlay--visible')
    });
});

modalsOverlay.addEventListener('click', (e) => {

    if (e.target == modalsOverlay) {
        modalsOverlay.classList.remove('modals__overlay--visible');
        modal.forEach((el) => {
            el.classList.remove('modal--visible');
        });
    }
});

// плавные якорные ссылки

const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
    anchor.addEventListener('click', function(event) {
        event.preventDefault();
        const blockID = anchor.getAttribute('href');
        document.querySelector('' + blockID).scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
};