let dropdownBtn = document.querySelectorAll(".dropdown__btn");
let drops = document.querySelectorAll(".dropdown__drop");

dropdownBtn.forEach(function (dB) {
  dB.addEventListener("click", function (q) {
    let currentBtn = q.currentTarget;
    let drop = currentBtn.closest(".dropdown__item").querySelector(".dropdown__drop")
    
    dropdownBtn.forEach(function (dB) {
      if (dB !== currentBtn) {
        dB.classList.remove("dropdown__btn--active")
      }
    });

    drops.forEach(function (dr) {
      if (dr !== drop) {
        dr.classList.remove("dropdown__drop--active")
      }
    });

    drop.classList.toggle("dropdown__drop--active")
    currentBtn.classList.toggle("dropdown__btn--active")
  });
});

document.body.addEventListener("click", function (elem) {
  if (!elem.target.closest(".dropdown__item")) {
    dropdownBtn.forEach(function (x) {
      x.classList.remove("dropdown__btn--active")
    });

    drops.forEach(function (y) {
      y.classList.remove("dropdown__drop--active")
    });
  }
});

const elScroll = document.querySelectorAll(
  ".dropdown__list"
);
elScroll.forEach((elScrollAll) => {
  new SimpleBar(elScrollAll);
});

const elementGallery = document.querySelector("#select1");
const choices = new Choices(elementGallery, {
  searchEnabled: false,
  itemSelectText: "",
  classNames: {
    containerOuter: "choices myclass",
    containerInner: "choices__inner myclass__inner",
    listSingle: "choices__list--single myclass__list--single",
    placeholder: "choices__placeholder myclass__placeholder",
    itemOption: "choices__item--choice myclass__item--choice",
    item: "choices__item myclass__item",
  },
});

document.querySelector(".myclass").setAttribute("aria-label", "Живопись");

const swiper = new Swiper(".swiper-container--header", {
  allowTouchMove: false,
  loop: true,
  effect: "fade",
  speed: 10000,
  autoplay: {
    delay: 10000,
  },
});

const swiperOne = new Swiper(".gallery__swiper-container", {
  slidesPerView: 1,
  grid: {
    rows: 1,
    fill: "row",
  },
  spaceBetween: 20,
  loop: false,

  breakpoints: {
    500: {
      slidesPerView: 2,
      spaceBetween: 60,
    },

    800: {
      slidesPerView: 2,
      spaceBetween: 40,
    },

    1020: {
      slidesPerView: 2,
      spaceBetween: 45,
    },

    1200: {
      slidesPerView: 3,
      spaceBetween: 60,
    },
  },
  // навигация
  navigation: {
    nextEl: ".gallery__button-next",
    prevEl: ".gallery__button-prev",
  },

  pagination: {
    el: ".gallery__swiper-pagination",
    type: "fraction",
  },

  a11y: {
    prevSlideMessage: "Предыдущий слайд",
    nextSlideMessage: "Следующий слайд",
  },
});

const swiperTwo = new Swiper(".events__swiper-container", {
  loop: false,
  // навигация
  navigation: {
    nextEl: ".events__button-next",
    prevEl: ".swiper-button-prev",
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  a11y: {
    prevSlideMessage: "Предыдущий слайд",
    nextSlideMessage: "Следующий слайд",
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 50,
    },

    641: {
      slidesPerView: 2,
      spaceBetween: 30,
    },

    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },

    920: {
      slidesPerView: 3,
      spaceBetween: 25,
    },

    1470: {
      slidesPerView: 3,
      spaceBetween: 60,
    },
  },
});

const swiperThree = new Swiper(".projects__swiper-container", {
  slidesPerView: 1,
  spaceBetween: 35,
  loop: false,

  // навигация
  navigation: {
    nextEl: ".projects__button-next",
    prevEl: ".projects__button-prev",
  },

  a11y: {
    prevSlideMessage: "Предыдущий слайд",
    nextSlideMessage: "Следующий слайд",
  },

  breakpoints: {
    350: {
      slidesPerView: 2,
      spaceBetween: 15,
    },

    640: {
      slidesPerView: 2,
      spaceBetween: 30,
    },

    768: {
      slidesPerView: 2,
      spaceBetween: 35,
    },

    1024: {
      slidesPerView: 2,
      spaceBetween: 50,
    },

    1270: {
      slidesPerView: 3,
      spaceBetween: 10,
    },

    1570: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});

new Accordion(".catalog__items", {
  elementClass: "catalog__item",
  triggerClass: "catalog__btn",
  panelClass: "catalog__artist",
  activeClass: "accordion--active",
  openOnInit: [0],
});

let tabsBtn = document.querySelectorAll(".catalog__link-alert");
let tabsItem = document.querySelectorAll(".catalog__card-info");

tabsBtn.forEach(function (elementTabs) {
  elementTabs.addEventListener("click", function (ie) {
    const path = ie.currentTarget.dataset.path;

    tabsBtn.forEach(function (btn) {
      btn.classList.remove("catalog__link-alert--active");
    });
    ie.currentTarget.classList.add("catalog__link-alert--active");

    tabsItem.forEach(function (elementTabs) {
      elementTabs.classList.remove("catalog__card-info--active");
    });
    document
      .querySelector(`[data-target="${path}"]`)
      .classList.add("catalog__card-info--active");
  });
});

let galleryArtist = document.querySelectorAll(".gallery__swiper-slide");
let galleryInfo = document.querySelectorAll(".gallery-content");
let galleryInfoClose = document.querySelectorAll(".gallery-content__close");
const overlay = document.querySelector(".overlay");

function openOverlay() {
  overlay.style.visibility = "visible";
  overlay.style.bottom = "0";
}

 function closeOverlay() {
  overlay.style.visibility = "hidden";
  overlay.style.bottom = "-100%";
}

galleryArtist.forEach(function (elementArtist) {
  elementArtist.addEventListener("click", function (activ) {
    const info = activ.currentTarget.dataset.info;

    document
      .querySelector(`[data-targ="${info}"]`)
      .classList.add("gallery-content--activ");
    document.body.classList.toggle("stop-scroll");
    openOverlay()
  });
});

galleryInfoClose.forEach(function (elClose) {
  elClose.addEventListener("click", function () {
    document.body.classList.remove("stop-scroll");
    closeOverlay()
    galleryInfo.forEach(function (elInf) {
      elInf.classList.remove("gallery-content--activ");
    });
  });
});

overlay.addEventListener('click', function () {
  document.body.classList.remove("stop-scroll");
    closeOverlay()
    galleryInfo.forEach(function (elInf) {
      elInf.classList.remove("gallery-content--activ");
  });
})

document.addEventListener('keydown', function(event) {
  if (event.key === "Escape") {
    document.body.classList.remove("stop-scroll");
    closeOverlay()
    galleryInfo.forEach(function (elInf) {
      elInf.classList.remove("gallery-content--activ");
    });
  }
});

ymaps.ready(init);
function init() {
  // Создание карты.
  var myMap = new ymaps.Map("myMap1", {
    center: [55.75846806898367, 37.60108849999989],
    zoom: 14,
  });

  var myPlacemark = new ymaps.Placemark(
    [55.75846806898367, 37.60108849999989],
    {},
    {
      iconLayout: "default#image",
      iconImageHref: "img/iconMap.svg",
      iconImageSize: [20, 20],
      iconImageOffset: [0, 0],
    }
  );

  // Размещение геообъекта на карте.
  myMap.geoObjects.add(myPlacemark);
  myMap.behaviors.disable("scrollZoom");
}

document.querySelectorAll(".js-scroll-link").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const href = this.getAttribute("href").substring(1);
    const scrollTarget = document.getElementById(href);
    const elementPosition = scrollTarget.getBoundingClientRect().top;

    window.scrollBy({
      top: elementPosition,
      behavior: "smooth",
    });
  });
});

let burger = document.querySelector(".burger");
let navBurger = document.querySelector(".nav");
let linkBurger = document.querySelectorAll(".nav__link");
let burgerClose = document.querySelector(".nav__close");
let burgerEnter = document.querySelector(".nav__enter");

burger.addEventListener("click", function () {
  navBurger.classList.toggle("header__nav--active");
  document.body.classList.toggle("stop-scroll");
});

burgerClose.addEventListener("click", function () {
  navBurger.classList.remove("header__nav--active");
  document.body.classList.remove("stop-scroll");
});

burgerEnter.addEventListener("click", function () {
  navBurger.classList.remove("header__nav--active");
  document.body.classList.remove("stop-scroll");
});

linkBurger.forEach(function (lB) {
  lB.addEventListener("click", function () {
    navBurger.classList.remove("header__nav--active");
    document.body.classList.remove("stop-scroll");
  });
});

let searchDisclosure = document.querySelector(".search-disclosure");
let searchBtn = document.querySelector(".header__search-one");
let searchClose = document.querySelector(".search-disclosure__close");

searchBtn.addEventListener("click", function () {
  searchDisclosure.classList.toggle("header__search-disclosure--active");
});

searchClose.addEventListener("click", function () {
  searchDisclosure.classList.remove("header__search-disclosure--active");
});

tippy(".projects__tultip-btn", {
  theme: "tultip-theme",
  maxWidth: 264,
});
