sideBarOpen=false;    
function closeNav() {
    sideBarOpen=false;
    document.getElementById("mySidenav").style.height = "0";
  }
  
function openNav() {

    if (sideBarOpen){
        closeNav();
    } else{
        sideBarOpen = true;
        document.getElementById("mySidenav").style.height = "260px";
    }
  }

