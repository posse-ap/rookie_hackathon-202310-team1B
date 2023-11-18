

$('.slider').slick({
    fade:true,//切り替えをフェードで行う。初期値はfalse。
    autoplay: true,//自動的に動き出すか。初期値はfalse。
    autoplaySpeed: 3000,//次のスライドに切り替わる待ち時間
    speed:1000,//スライドの動きのスピード。初期値は300。
    infinite: true,//スライドをループさせるかどうか。初期値はtrue。
    slidesToShow: 1,//スライドを画面に3枚見せる
    slidesToScroll: 1,//1回のスクロールで3枚の写真を移動して見せる
    arrows: true,//左右の矢印あり
    prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
    nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
    dots: true,//下部ドットナビゲーションの表示
        pauseOnFocus: false,//フォーカスで一時停止を無効
        pauseOnHover: false,//マウスホバーで一時停止を無効
        pauseOnDotsHover: false,//ドットナビゲーションをマウスホバーで一時停止を無効
});
=======
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


