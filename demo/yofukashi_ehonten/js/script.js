/*ローディングアニメ*/
      window.addEventListener("load", () => {
  const loading = document.getElementById("loading");
  const fv = document.getElementById("fv");
  const gif = loading.querySelector("img");

  // GIFリセット
  gif.src = gif.src.split("?")[0] + "?t=" + new Date().getTime();
  const gifDuration = 2000;

  setTimeout(() => {
    loading.style.opacity = 0;

    setTimeout(() => {
      fv.classList.add("show");
    }, 100); 

    setTimeout(() => {
      loading.style.display = "none";
    }, 1200);
  }, gifDuration);
});

/*PC版_ヘッダー*/
/*
  const header = document.getElementById("header");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("is-small");
    } else {
      header.classList.remove("is-small");
    }
  });*/

const header = document.getElementById("header");

window.addEventListener("scroll", () => {
  // PC幅のみ（769px以上）に制限
  if (window.innerWidth >= 769) {
    if (window.scrollY > 50) {
      header.classList.add("is-small");
    } else {
      header.classList.remove("is-small");
    }
  } else {
    // PC以外：常にデフォルト（大きいヘッダー状態）
    header.classList.remove("is-small");
  }
});

//SP版ハンバーガーメニュー
const hamburger = document.getElementById('hamburger');
const nav = document.querySelector('.header__nav');

if (hamburger && nav) {
  const toggle = () => {
    const isActive = hamburger.classList.toggle('is-active');
    nav.classList.toggle('is-active');
    hamburger.setAttribute('aria-expanded', isActive ? 'true' : 'false');
  };

  hamburger.addEventListener('click', toggle);

  // キーボード操作にも対応（Enter / Space）
  hamburger.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar') {
      e.preventDefault();
      toggle();
    }
  });
}


/*お届け絵本　スライダー*/

  $(document).ready(function(){
    $('.stories__list').slick({
      variableWidth: true,
      autoplay: true,
      autoplaySpeed: 0,
      speed: 9000,
      cssEase: "linear", 
      dots: false,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1
    });
  });

  // ページ内スクロール
$('a[href^="#"]').click(function () {
  const speed = 600;
  let href = $(this).attr("href");
  let target = $(href == "#" || href == "" ? "html" : href);
  let position = target.offset().top;
  $("body,html").animate({ scrollTop: position }, speed, "swing");
  return false;
});


// TOPに戻る
  const toTopBtn = document.querySelector('.to-top');

  window.addEventListener('scroll', () => {
    if (window.scrollY >50) { 
      toTopBtn.classList.add('show');
    } else {
      toTopBtn.classList.remove('show');
    }
  });

//FAQ アコーディオン
document.querySelectorAll(".faq__question").forEach((q) => {
  q.addEventListener("click", () => {
    const item = q.closest(".faq__item");
    item.classList.toggle("active");
  });
});

//星の動き
const stars = document.querySelectorAll('.twinkle');

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.3
});

stars.forEach(twinkle => observer.observe(twinkle));