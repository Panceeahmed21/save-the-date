

document.body.style.cssText = `height : 0 `


setInterval(() => {

    document.querySelector(".OVERLAY").classList.add("d-none")

    document.body.style.cssText = `height : auto `

}, 2000);





new Swiper(".memoriesSwiper", {

    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    loop: true,

    slidesPerView: "auto",

    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },

    coverflowEffect: {
        rotate: 15,
        stretch: 0,
        depth: 150,
        modifier: 1.5,
        slideShadows: false,
        scale: 0.9,
    },

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

});


let sections = document.querySelectorAll("[id]");
let navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach((section) => {

        let sectionTop = section.offsetTop - 150;
        let sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }

    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === "#" + currentSection
        ) {
            link.classList.add("active");
        }

    });

});