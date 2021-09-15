sideBarOpen=false;    
function closeNav() {
    sideBarOpen=false;
    toggleBurger();
    document.getElementById("mySidenav").style.height = "0";
    document.getElementById("burger").toggleAttribute('is-active');
  }
  
function openNav() {

    if (sideBarOpen){
        closeNav();
    } else{
        toggleBurger();
        sideBarOpen = true;
        document.getElementById("mySidenav").style.height = "260px";
        document.getElementById("burger").toggleAttribute('is-active');
    }
  }

function toggleBurger(){
  let burgerIcon = document.getElementById('burger');
  burgerIcon.classList.toggle('is-active');
};
