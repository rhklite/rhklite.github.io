function openNav() {

    if (document.getElementById("mySidenav").style.width == "150px"){
        document.getElementById("mySidenav").style.width =0;
    } else{
        document.getElementById("mySidenav").style.width = "150px";
    }
  }
  
  /* Set the width of the side navigation to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
  
// source https://www.youtube.com/watch?v=qvn2SxGvyPs
// const burgerIcon = document.querySelector('#burger');
// const navbarMenu = document.querySelector('#navMenu');

// burgerIcon.addEventListener('click', () => {
//     navbarMenu.classList.toggle('is-active');
// })

// source: https://gist.github.com/Bradcomp/a9ef2ef322a8e8017443b626208999c1
// (function () {
//     var burger = document.querySelector('.burger');
//     var menu = document.querySelector('#' + burger.dataset.target);
//     burger.addEventListener('click', function () {
//         burger.classList.toggle('is-active');
//         menu.classList.toggle('is-active');
//     });
// })();