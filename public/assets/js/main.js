
function setFontSize() {
    var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    var baseFontSize = 16; 
   
    var newSize;

    if (screenWidth < 768) {
        newSize = baseFontSize * 0.8;
           
    } else if (screenWidth < 1024) {
        newSize = baseFontSize * 1.2; 
    } else {
        newSize = baseFontSize * 1.5; 
    }

    document.body.style.fontSize = newSize + "px";
}

function toggleSidebar(){
    var sidebar=
    document.getElementById("sidebar");
    if (sidebar.style.display === ("block")) {
        sidebar.style.display="none";
    }
    else{
    sidebar.style.display="block";
}
}
window.addEventListener("resize", setFontSize);
window.addEventListener("load", setFontSize);
