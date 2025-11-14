let nav = document.querySelector("nav > .wrapper")
let linksBtn = document.querySelector(".wrapper .linksBtn")
let sidebar = document.querySelector("#sidebar")
let menuBtn = document.querySelector(".wrapper .menu");

let menuIcon = document.querySelector(".menu > button > .ri-menu-fill")
let closeMenuIcon = document.querySelector(".menu > button > .ri-close-line")

function handleResize() {
    if (window.innerWidth < 750) {
        if (!sidebar.contains(linksBtn)) {
            sidebar.appendChild(linksBtn);
        }
    } else {
        // Move back to nav if not already there
        console.log(menuBtn)
        if (!nav.contains(linksBtn)) {
            nav.insertBefore(linksBtn, menuBtn);
        }
    }
}

window.addEventListener('resize', handleResize);
handleResize();

menuBtn.addEventListener("click", function () {
    sidebar.classList.toggle("hide")

    if(sidebar.classList.contains("hide")){
        menuIcon.style.opacity = 1;
        closeMenuIcon.style.opacity = 0;
    }else{
        menuIcon.style.opacity = 0;
        closeMenuIcon.style.opacity = 1;
    }
})