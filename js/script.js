var swiper = new Swiper(".mySwiper", {
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: true,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    on: {
        init() {
            this.el.addEventListener('mouseenter', () => {
                this.autoplay.stop();
            });

            this.el.addEventListener('mouseleave', () => {
                this.autoplay.start();
            });
        }
    },
});

let menuBtn = document.querySelector('.header__burger-menu');
let menu = document.querySelector('.header__menu');

menuBtn.addEventListener('click', function () {
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
});

AOS.init({
    duration: 1200,
});

// ############

let btn = document.getElementById("btn");
let btnText = document.getElementById("btnText");
let btnIcon = document.getElementById("btnIcon");
btn.onclick = function(){
    document.body.classList.toggle("dark-theme");

    if(document.body.classList.contains("dark-theme")){
        btnIcon.src = "./img/sun.png";
        btnText.innerHTML = "Light";
    } else {
        btnIcon.src = "./img/moon.png";
        btnText.innerHTML = "Dark";
    }
}
