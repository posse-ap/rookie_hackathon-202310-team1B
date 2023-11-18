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