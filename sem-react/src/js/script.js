const isMobile = () => {
    if(window.innerWidth < 1024){
        document.getElementById("mobileMenuIcon").style.display = "block";
    }
}

const initSlider = () => {
    const mySwiper = new Swiper('.swiper-container', {
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    })
}

function slideChange(btn){
    document.getElementById(btn ? "btn-next" : "btn-prev").disabled = true
    setTimeout(() => {
        document.getElementById(btn ? "btn-next" : "btn-prev").disabled = false
    }, 1000)
}

window.onload = async () => {
    //verify ismobile
    isMobile();
    //init slider
    initSlider();
}