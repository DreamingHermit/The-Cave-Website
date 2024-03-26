document.addEventListener("DOMContentLoaded", function() {

    var sidebar = document.getElementById("sidebar");
    var links = sidebar.querySelectorAll("a");
    links.forEach(link => link.style.opacity = "0");
    sidebar.style.width = "0";
});

document.getElementById("menu-button").addEventListener("click", function() {
    var sidebar = document.getElementById("sidebar");
    var topbarTextB = document.getElementById("bar-text-big");
    var topbarTextS = document.getElementById("bar-text-small");
    var links = sidebar.querySelectorAll("a");

    // Assuming 250px is the width of your sidebar
    if (sidebar.style.width === "250px") {
        links.forEach(link => link.style.opacity = "0");
        setTimeout(() => {
            sidebar.style.width = "0";
            topbarTextB.style.transform = "translateX(0)"; 
            topbarTextS.style.transform = "translateX(0)";
        }, 150); 
        
    } else {
        sidebar.style.width = "250px";
        topbarTextB.style.transform = "translateX(125px)"; 
        topbarTextS.style.transform = "translateX(125px)";
        setTimeout(() => {
            links.forEach(link => link.style.opacity = "1");
        }, 150); 
    }
});



