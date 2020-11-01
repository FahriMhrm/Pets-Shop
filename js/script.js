window.addEventListener('load', function(){
    const navbarNav = document.querySelector('.navbar-nav');
    const mainHeader = document.querySelector('.main-header-text');
    navbarNav.classList.add('tracking-in-contract-bck-top');
    mainHeader.classList.add('focus-in-contract-bck');
});

window.addEventListener('scroll', function(){
    const wScroll = window.pageYOffset;
    
    const about =  document.querySelector('#about');
    if(wScroll >= (about.offsetTop - 600)){
        about.classList.add('about-animasi1');
    }
    const aboutMain = document.querySelectorAll('.about-main');
    for(i=0; i<= aboutMain.length; i++){
        if(wScroll >= (about.offsetTop - 500)){
            aboutMain[0].classList.add('text-flicker-in-glow');
            aboutMain[1].classList.add('text-flicker-in-glow');
            aboutMain[2].classList.add('text-flicker-in-glow');
            aboutMain[1].style.animationDelay=".5s";
            aboutMain[2].style.animationDelay="1s";
        }
    }

    const aboutText = document.querySelectorAll('.about-text');
    for(i=0; i<= aboutMain.length; i++){
        if(wScroll >= (about.offsetTop - 400)){
            aboutText[0].classList.add('text-focus-in');
            aboutText[1].classList.add('text-focus-in');
            aboutText[2].classList.add('text-focus-in');
            aboutText[1].style.animationDelay=".5s";
            aboutText[2].style.animationDelay="1s";
        }
    }

    const services = document.querySelector('#services');
    const servicesBG = document.querySelectorAll('.services-bg');
    for(i=0; i<= servicesBG.length; i++){
        if(wScroll >= (services.offsetTop - 400)){
            servicesBG[0].classList.add('services-animasi1');
            servicesBG[1].classList.add('services-animasi1');
            servicesBG[2].classList.add('services-animasi1');
        }
    }

    const servicesMain = document.querySelector('.services-main');
    if(wScroll >= (services.offsetTop - 700)){
        servicesMain.classList.add('text-focus-in');
    }

    const servicesCard = document.querySelectorAll('.services-card');
    for(i=0; i<= servicesCard.length; i++){
        if(wScroll >= (servicesMain.offsetTop - 700)){
            servicesCard[0].classList.add('text-focus-in');
            servicesCard[1].classList.add('text-focus-in');
            servicesCard[2].classList.add('text-focus-in');
            servicesCard[0].style.animationDelay="1s";
            servicesCard[1].style.animationDelay="1s";
            servicesCard[2].style.animationDelay="1s";
        }
    }

    const adopt = document.querySelector('.adopt');
    if(wScroll >= (adopt.offsetTop - 400)){
        adopt.classList.add('adopt-animasi1');
    }

    const adoptCard = document.querySelectorAll('.adopt-card');
    for(i=0; i<= adoptCard.length; i++){
        if(wScroll >= (adopt.offsetTop - 300)){
            adoptCard[0].classList.add('text-focus-in');
            adoptCard[1].classList.add('text-focus-in');
            adoptCard[2].classList.add('text-focus-in');
            adoptCard[3].classList.add('text-focus-in');
            adoptCard[4].classList.add('text-focus-in');
            adoptCard[5].classList.add('text-focus-in');
            adoptCard[6].classList.add('text-focus-in');
            adoptCard[7].classList.add('text-focus-in');
            adoptCard[0].style.opacity="1";
            adoptCard[1].style.animationDelay=".5s";
            adoptCard[1].style.opacity="1";
            adoptCard[2].style.animationDelay="1s";
            adoptCard[2].style.opacity="1";
            adoptCard[3].style.animationDelay="1.5s";
            adoptCard[3].style.opacity="1";
            adoptCard[4].style.animationDelay="2s";
            adoptCard[4].style.opacity="1";
            adoptCard[5].style.animationDelay="2.5s";
            adoptCard[5].style.opacity="1";
            adoptCard[6].style.animationDelay="3s";
            adoptCard[6].style.opacity="1";
            adoptCard[7].style.animationDelay="3.5s";
            adoptCard[7].style.opacity="1";
        }
    }
});