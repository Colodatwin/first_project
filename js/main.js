$(function () {
  var mixer = mixitup('.blog__list');
  $('.blog__filter-btn').on('click', function () {
    $('.blog__filter-btn').removeClass('blog__filter-btn--active')
    $(this).addClass('blog__filter-btn--active')
  })

  $(".header__rateYo").rateYo({
    rating: 4.5,
    starWidth: "30px",
    normalFill: "#D7D1C7",
    spacing: "10px",
    // readOnly: true
  });
  $('.testi__slider').slick({
    dots: true,
    arrows: false,
    slidesToShow: 2,
    Infinite: true,
    speed: 1000,
    // autoplay: true,
    autoplaySpeed: 1500,
    draggable: false,
    // appendArrows: $('.testi__tools'),
    appendDots: $('.testi__dots'),
    responsive:[
      {
        breakpoint: 850,
        settings:{
          slidesToShow: 1,
        },
      }
    ]
  })

  $('.testi__slider-prev').on('click', function (e) {
    e.preventDefault()
    $('.testi__slider').slick('slickPrev')
  })
  $('.testi__slider-next').on('click', function (e) {
    e.preventDefault()
    $('.testi__slider').slick('slickNext')
  })

  // $('.testi__slider-prev').click(function (event) {
  //   $('.testi__slider').slick('slickPrev');
  //   return false;
  // })
  // $('.testi__slider-next').click(function (event) {
  //   $('.testi__slider').slick('slickNext');
  //   return false;
  // });

  // $('.questions__acc-link').on("click", function(e){
  //   e.preventDefault()
  //   $(this).toggleClass('questions__acc-link--active')
  //   $(this).children('.questions__acc-text').slideToggle()
  // });

  $('.questions__acc-link').on('click', function (e) {
    e.preventDefault()
    if ($(this).hasClass('questions__acc-link--active')) {
      $(this).removeClass('questions__acc-link--active')
      $(this).children('.questions__acc-text').slideUp()
    } else {
      $('.questions__acc-link').removeClass('questions__acc-link--active')
      $('.questions__acc-text').slideUp()
      $(this).addClass('questions__acc-link--active')
      $(this).children('.questions__acc-text').slideDown()
    }
  });

  $(".header__nav-list a, .footer__nav-list a, .footer__logo").on("click", function (e) {
    //отменяем стандартную обработку нажатия по ссылке
    e.preventDefault()
    //забираем идентификатор бока с атрибута href
    var id = $(this).attr('href'),
    //узнаем высоту от начала страницы до блока на который ссылается якорь
    top = $(id).offset().top
    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({ scrollTop: top }, 800)
    
    
  })
  setInterval(() => {
      if ($(window).scrollTop() > 0 && $('.header__top').hasClass('header__top--open') === false){
        $('.burger').addClass('burger--follow')
      } else{
        $('.burger').removeClass('burger--follow')
      } 
  }, 0);

  $('.burger, .overlay, .header__nav-list a').on('click', function(e) {
    e.preventDefault()
    $('.header__top').toggleClass('header__top--open')
    $('.burger').toggleClass('burger--active');
    $('.overlay').toggleClass('overlay--show')

  })
  
  // что бы свернуть все ниже, в адаптиве можно использовать 
  // , но нужно задать в css display:none дочернему элементу класса(тоесть, то что сворачиваем)  и pointer-events:auto нашему классу в медиа запросе, и изначально pointer-events:none; для нашего класса
  // $('.').on('click', function(){
  //   $(this).next().slideToggle()
  // })




});
// яндекс карта
function init() {
  let map = new ymaps.Map('map', {
    center: [40.70278015881568, -73.99274145776369],
    zoom: 12
  });

  map.controls.remove('geolocationControl'); // удаляем геолокацию
  map.controls.remove('searchControl'); // удаляем поиск
  map.controls.remove('trafficControl'); // удаляем контроль трафика
  map.controls.remove('typeSelector'); // удаляем тип
  map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
  map.controls.remove('zoomControl'); // удаляем контрол зуммирования
  map.controls.remove('rulerControl'); // удаляем контрол правил
  map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)
}
ymaps.ready(init);