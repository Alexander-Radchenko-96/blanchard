window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.header-burger').addEventListener('click', function() {
        document.querySelector('.burger-window').classList.add('burger-window--open')
    });
    document.querySelector('.burger-closed').addEventListener('click', function() {
        document.querySelector('.burger-window').classList.remove('burger-window--open')
    });
    document.querySelectorAll('.header-top__item-link').forEach(function(link) {
        link.addEventListener('click', function() {
            document.querySelector('.burger-window').classList.remove('burger-window--open')
        });
    });

    // открытие/закрытие search
    document.querySelector('.header-top__search').addEventListener('click', function() {
        document.querySelector('.header-search-window').classList.add('header-search-window--open'),
            document.querySelector('.header-search-input').classList.add('header-search-input--open')
    })
    document.querySelector('.header-search-closed').addEventListener('click', function() {
        document.querySelector('.header-search-window').classList.remove('header-search-window--open'),
            document.querySelector('.header-search-input').classList.remove('header-search-input--open')
    })

    // появление/изчезание search
    document.querySelector('.header-top__search').addEventListener('click', function() {
        document.querySelector('.header-top__search').classList.add('header-top__search-none'),
            document.querySelector('.header-search-closed').classList.add('header-search-closed--is-open')
    })

    document.querySelector('.header-search-closed').addEventListener('click', function() {
        document.querySelector('.header-top__search').classList.remove('header-top__search-none'),
            document.querySelector('.header-search-closed').classList.remove('header-search-closed--is-open')
    })
})

const select1 = new CustomSelect('#select-1');
const select2 = new CustomSelect('#select-2');
const select3 = new CustomSelect('#select-3');
const select4 = new CustomSelect('#select-4');
const select5 = new CustomSelect('#select-5');
// -------галерея
const select6 = new CustomSelect('#select-6');

// запускаем слайдер hero

const slider = document.querySelector('.hero-swiper');
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
    slidesPerView: 1,
    direction: 'horizontal',
    slidesPerGroup: 1,
    spaceBetween: 10,
    pagination: {
        el: '.gallary__swiper-pagination',
        type: 'fraction',
    },
    navigation: {
        nextEl: '.gallary__swiper-button-next',
        prevEl: '.gallary__swiper-button-prev',
    },

    breakpoints: {
        330: {
            slidesPerView: 2,
            spaceBetween: 38,
            slidesPerGroup: 2
        },
        530: {
            slidesPerView: 2,
            spaceBetween: 38,
            slidesPerGroup: 2
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 33,
            slidesPerGroup: 2
        },

        1150: {
            slidesPerView: 3,
            spaceBetween: 50,
            slidesPerGroup: 3
        },

        1325: {
            slidesPerView: 3,
            spaceBetween: 50,
            slidesPerGroup: 3
        }
    },
});

// Настраиваем слайдер секции events

let mySwiper2 = new Swiper(slider2, {
    slidesPerView: 1,
    direction: 'horizontal',
    spaceBetween: 5,
    slidesPerGroup: 1,
    navigation: {
        nextEl: '.events__swiper-button-next',
        prevEl: '.events__swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },

    breakpoints: {

        530: {
            slidesPerView: 1,
            spaceBetween: 20,
            slidesPerGroup: 1
        },

        650: {
            slidesPerView: 2,
            spaceBetween: 34,
            slidesPerGroup: 2
        },

        1024: {
            slidesPerView: 3,
            spaceBetween: 27,
            slidesPerGroup: 3
        },

        1325: {
            slidesPerView: 3,
            spaceBetween: 50,
            slidesPerGroup: 3
        }
    },
})

// настраиваем слайдер секции projects

let mySwiper3 = new Swiper(slider3, {
    slidesPerView: 1,
    direction: 'horizontal',
    spaceBetween: 50,
    slidesPerGroup: 1,
    navigation: {
        nextEl: '.projects__swiper-button-next',
        prevEl: '.projects__swiper-button-prev',
    },
    loop: true,

    breakpoints: {
        530: {
            slidesPerView: 1,
            spaceBetween: 10,
            slidesPerGroup: 1,
        },

        768: {
            slidesPerView: 2,
            spaceBetween: 30,
            slidesPerGroup: 2,
        },

        1024: {
            slidesPerView: 2,
            spaceBetween: 50,
            slidesPerGroup: 2,
        },

        1325: {
            slidesPerView: 3,
            spaceBetween: 50,
            slidesPerGroup: 3,
        }
    }
})

// tultip в секции проекты

tippy('[data-tippy-content]');

// map to section map

ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map("map", {
        center: [55.758468, 37.601088],
        controls: ['zoomControl'],
        zoom: 14,
        controls: ['geolocationControl', 'zoomControl']
    }, {
        suppressMapOpenBlock: true,
        geolocationControlSize: "large",
        geolocationControlPosition: { top: "350px", right: "10px" },
        geolocationControlFloat: 'none',
        zoomControlSize: "small",
        zoomControlFloat: "none",
        zoomControlPosition: { top: "270px", right: "10px" }
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
    myMap.behaviors.disable(['scrollZoom']); // отключаем скролл карты
}



// активируем Аккордеон в секции catalog

$(function() {
    $("#accordion").accordion({
        heightStyle: "content",
        collapsible: true
    });
});

// табы в секции catalog

document.querySelectorAll('.catalog__items-info-link').forEach(function(tabsBtn) {
    tabsBtn.addEventListener('click', function(e) {
        const path = e.currentTarget.dataset.path;

        document.querySelectorAll('.catalog__items-info-link').forEach(function(btn) {
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
const modalClosed = document.querySelectorAll('.modal-closed-btn');

btns.forEach((el) => {
    el.addEventListener('click', (e) => {
        let path = e.currentTarget.getAttribute('data-path');

        document.body.style.overflow = 'hidden';

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

        document.body.style.overflow = '';

        modal.forEach((el) => {
            el.classList.remove('modals__overlay--visible');
        });
    }
});

modalClosed.forEach(function(item) {

    item.addEventListener('click', function(e) {
        let parentModal = this.closest('.modals__overlay');

        document.body.style.overflow = '';

        parentModal.classList.remove('modals__overlay--visible');
    });

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
