const mobileNav = document.querySelector(".mobile-nav");
const menuBtn = document.getElementById("openMenu");

menuBtn.addEventListener("click" , ()=>{
    mobileNav.classList.toggle("active");
})