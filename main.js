window.addEventListener('load', () => {
    let images = document.querySelectorAll('img');
    let loader = document.querySelector('.loader');
    let site = document.querySelector('.body')
    images.forEach(image => {
        let isLoaded = image.complete && image.naturalHeight !== 0 && image.height;
        if (isLoaded) {
            loader.style.display = "none";
            site.style.display = "inline";
        }
    })
})



const header = document.querySelector('header');
const navLinks = document.querySelectorAll('.navLinks li');
const logo = document.querySelector('.mainLogo');
const burgers = document.querySelectorAll('.bar');

window.addEventListener('scroll', () => {

    if(this.scrollY > 100){
        header.classList.add("headerBg");
        navLinks.forEach(navLink => {
            navLink.classList.add("navChg");
        });
        logo.src = './images/umc_logo_full_white.png';
        burgers.forEach(bar => {
            bar.classList.add('active')
        })
        
    }
    else{
        header.classList.remove("headerBg");
        navLinks.forEach(navLink => {
            navLink.classList.remove("navChg");
        });
        logo.src = './images/umc_logo_full.png';

        burgers.forEach(bar => {
            bar.classList.remove('active')
        })
    }
})





let accordions = document.querySelectorAll('.accordion');
let bars = document.querySelector('.bars');
let nav = document.querySelector('.header-flex');
window.addEventListener('load', () => {
    
    accordions.forEach(accordion => {
        accordion.addEventListener('click', () => {
            accordion.classList.toggle('active');
        })
    })

    bars.addEventListener('click', () => {
        nav.classList.toggle('active');

        burgers.forEach(bar => {
            bar.classList.toggle('closeBtn');
        })
    }) 
});







const counters = document.querySelectorAll('.counter');
const speed = 500;
//countUp();

const countUp = () => {
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const inc = Math.round(target / speed);
            
            if (count < target){
                counter.innerText = count + inc;
                setTimeout(updateCount, 300)
            }
            else{
                count.innerText = target;
            }
        }
        updateCount();
    })
};


window.addEventListener('scroll', () => {

    let onViewEffect = document.querySelector(".achievmentSection");
    let screenHeight = window.innerHeight;
    let position = onViewEffect.getBoundingClientRect().top;
    //let valid = true;

    console.log(position);
    if(position < screenHeight){
        countUp()
        // valid = false;
    }
    else{
        // clearInterval(setInterval(countUp, 800));
    }

});