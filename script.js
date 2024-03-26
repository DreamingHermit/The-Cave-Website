document.addEventListener("DOMContentLoaded", function() {

    var sidebar = document.getElementById("sidebar");
    var links = sidebar.querySelectorAll("a");
    links.forEach(link => link.style.opacity = "0");
    sidebar.style.width = "0";
});


document.getElementById("menu-button").addEventListener("click", function() {
    var sidebar = document.getElementById("sidebar");
    var topbarTextB = document.getElementById("bar-text-big");
    var links = sidebar.querySelectorAll("a");
    var mainContent = document.getElementById("main-content");

    if (sidebar.style.width === "200px") {
        links.forEach(link => link.style.opacity = "0");
        setTimeout(() => {
            sidebar.style.width = "0";
            topbarTextB.style.transform = "translateX(0)";
            mainContent.style.transform = "translateX(0)"; 
        }, 150); 
        
    } else {
        sidebar.style.width = "200px";
        topbarTextB.style.transform = "translateX(70px)"; 
        mainContent.style.transform = "translateX(200px)"; 
        setTimeout(() => {
            links.forEach(link => link.style.opacity = "1");
        }, 150); 
    }
});


function loadPage(pageName) {
    const contentDiv = document.getElementById('main-content');
    var sidebar = document.getElementById("sidebar");
    var topbarTextB = document.getElementById("bar-text-big");
    var links = sidebar.querySelectorAll("a");
    var mainContent = document.getElementById("main-content");


    const pageUrl = pageName + '.html'; 

    links.forEach(link => link.style.opacity = "0");
    setTimeout(() => {
        sidebar.style.width = "0";
        topbarTextB.style.transform = "translateX(0)";
        mainContent.style.transform = "translateX(0)"; 
    }, 150); 

    fetch(pageUrl)
        .then(response => response.text())
        .then(html => {
            contentDiv.innerHTML = html;
        })
        .catch(err => {
            contentDiv.innerHTML = '<p>Error loading the page.</p>';
            console.error('Failed to load page', err);
        });

    
    
}


document.getElementById('home').addEventListener('click', () => loadPage('home'));
document.getElementById('blog').addEventListener('click', () => loadPage('blog'));
document.getElementById('projects').addEventListener('click', () => loadPage('projects'));
document.getElementById('about').addEventListener('click', () => loadPage('about'));
document.getElementById('bar-text-big').addEventListener('click', () => loadPage('home'));


window.onload = () => loadPage('home');


