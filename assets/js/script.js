/* ハンバーガーメニュー */

// ヘッダー・ボタンの要素を取得
const header = document.getElementById("js-header");
const button = document.getElementById("js-headerButton");
const navLinks = document.querySelectorAll('.header-navLink');

// ボタンをクリックした時の処理
button.addEventListener("click",()=>{
    header.classList.toggle("is-open");
})
// メニューの各リンクをクリックしたときの処理
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    header.classList.remove('is-open');
  });
});

/* ヘッダーの透過 */
const mainVisual = document.getElementById("js-mainVisual");
window.addEventListener("scroll", function(){
    if(window.scrollY > mainVisual.clientHeight - header.clientHeight){
      header.classList.remove("is-transparent");
    }else{
      header.classList.add("is-transparent");}
    }
  );

  $(document).ready(function(){
    $(document).ready(function () {
        $('.slider').slick({
            fade: true,
            autoplay: true,
            autoplaySpeed: 3000,
            speed: 1000,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            prevArrow: '<div class="slick-prev"></div>',
            nextArrow: '<div class="slick-next"></div>',
            dots: true,
            pauseOnFocus: false,
            pauseOnHover: false,
            pauseOnDotsHover: false,
    });
    });

