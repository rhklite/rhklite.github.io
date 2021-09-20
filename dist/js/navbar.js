sideBarOpen=false;

// closes the drop down nav menu
function closeNav() {
    sideBarOpen=false;
    toggleBurger();
    document.getElementById("mySidenav").style.height = "0";
    document.getElementById("burger").toggleAttribute('is-active');
    document.getElementById("navbar").style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  }

// opens the drop down nav menu
function openNav() {
    if (sideBarOpen){
        closeNav();
    } else{
        toggleBurger();
        sideBarOpen = true;
        document.getElementById("mySidenav").style.height = "290px";
        document.getElementById("burger").toggleAttribute('is-active');
        document.getElementById("navbar").style.backgroundColor = "rgba(0, 0, 0, 0)";
    }
  }

// animate the nav burger icon
function toggleBurger(){
  let burgerIcon = document.getElementById('burger');
  burgerIcon.classList.toggle('is-active');
};

// hide/revel navbar on scroll
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos || currentScrollPos <=100) {
    document.getElementById("navbar").style.top = "15px";
  } else {
    document.getElementById("navbar").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;

  if(sideBarOpen){
    closeNav();
  }
}

document.onclick=function(event){
  var target = event.target;
  if (target.id!="burger" && target.id!="mySidenav" && sideBarOpen){
    closeNav();
  }
};
