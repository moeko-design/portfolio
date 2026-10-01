/*ローディングアニメーション*/
window.addEventListener('load', () => {
  const loading = document.getElementById('loading');
  const fvCopy = document.querySelector('.fv_copy');
  
  setTimeout(() => {
    loading.style.transition = 'opacity 1s ease';
    loading.style.opacity = '0';

    setTimeout(() => {
      loading.style.display = 'none';
      fvCopy?.classList.add('show');

    }, 1000); 
  }, 1500); 
});

/*FVコピー表示*/

/*ハンバーガーメニュー*/
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('drawer_menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  menu.classList.toggle('active');
});

menu.addEventListener('click', e => {
  if(e.target.tagName === 'A'){
    hamburger.classList.remove('active');
    menu.classList.remove('active');
    // document.body.classList.remove('menuopen');
  }
});


/*スクロールでフェードイン*/
$(function () {
  $(window).on('scroll', function () {
    $('.fade-in').each(function () {
      var position = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > position - windowHeight + 100) {
        $(this).addClass('show');
      }
    });
  });
});


/*スムーススクロール*/
$(function(){
  $('a[href^="#"]').on('click', function(e) {
    var speed = 500;
    var href = $(this).attr("href");
    var $target = $(href === "#" || href === "" ? 'html' : href);
    var position = $target.offset().top;
    $('html, body').animate({scrollTop: position}, speed, 'swing');
    e.preventDefault();
  });
});


/*イベントスライダー*/
$('.event_list').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  });
  
  
/*フロースライダー*/
$('.flow_step').slick({
  arrows: true,
  appendArrows: $('.flow_arrows'),
  prevArrow: '<button type="button" class="slick-prev flow_arrow">←</button>',
  nextArrow: '<button type="button" class="slick-next flow_arrow">→</button>',
  infinite: false,
  slidesToShow: 3.5,
  slidesToScroll: 1,
  responsive: [{
    breakpoint: 767,
    settings: {
      slidesToShow: 1
    }
  }]
});