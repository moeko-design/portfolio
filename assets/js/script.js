

// スクロール表示領域で表示
$(window).on('scroll', function () {
  $('.fade-in').each(function () {
    const position = $(this).offset().top;
    const scroll = $(window).scrollTop();
    const windowHeight = $(window).height();

    if (scroll > position - windowHeight + 100) {
      $(this).addClass('show');
    }
  });
});

// fv 内の要素を順番に表示
$(function() {
  const items = $('.js-fv-item');

  items.each(function(i) {
    setTimeout(() => {
      $(this).addClass('show');
    }, i * 400);
  });
});

// スムーススクロール
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach(link => {
    link.addEventListener("click", function(e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (!targetElement) return;

      const rect = targetElement.getBoundingClientRect().top;
      const offset = window.pageYOffset;
      const targetPosition = rect + offset;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth"
      });
    });
  });
});