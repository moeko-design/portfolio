
// FV初回表示アニメーション
$(window).on('load', function() {
  const $fv = $('.fv');
  const $header = $('#header');

  // 1. ページ読み込み 0.5秒後
  setTimeout(function() {
    $fv.addClass('is-active');
  }, 500);

  // 2. 「ヘッダー」を出す
  setTimeout(function() {
    $header.addClass('is-show');
  }, 1700); 
});




// コレクションスライダー
$('.collection__list').slick({
    autoplay: true,
    autoplaySpeed: 0,
    speed: 30000,
    cssEase: 'linear',
    arrows: false,
    infinite: true,
    pauseOnHover: false,
    pauseOnFocus: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  });


  // マテリアル背景切り替え
$(window).on('scroll', function() {
  var scrollTop = $(window).scrollTop();
  var $target = $('#material');
  var sectionTop = $target.offset().top;
  var sectionHeight = $target.height();
  var windowHeight = $(window).height();

  // 画像リスト
  var images = [
    'assets/images/material_01.png',
    'assets/images/material_02.png',
    'assets/images/material_03.png',
    'assets/images/material_04.png'
  ];

  // セクションが画面内にある時だけ実行
  if (scrollTop >= sectionTop && scrollTop <= sectionTop + sectionHeight - windowHeight) {
    
    // セクション内のスクロール進捗（0.0〜1.0）
    var progress = (scrollTop - sectionTop) / (sectionHeight - windowHeight);
    
    // 進捗に合わせてインデックスを決定
    var index = Math.floor(progress * images.length);
    if (index >= images.length) index = images.length - 1;

    // 画像の書き換え
    var $bg = $('.material__bg-overlay');
    var nextImg = 'url(' + images[index] + ')';
    
    if ($bg.css('background-image').indexOf(images[index]) === -1) {
      $bg.css('background-image', nextImg);
    }
  }
});



 // フェードアニメーション
const fadeElements = document.querySelectorAll(
  '.fade-up, .fade-left, .fade-right, .fade-photo'
);

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-show');
    }
  });
}, {
  threshold: 0.2
});

fadeElements.forEach((element) => {
  observer.observe(element);
});
