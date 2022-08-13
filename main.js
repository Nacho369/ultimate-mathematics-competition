
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


let noOfStudents = document.querySelector('.noOfStudents');
let noOfExams = document.querySelector('.noOfExams');
let addNoOfStud = parseInt(noOfStudents.innerHTML);
let addNoOfExam = parseInt(noOfExams.innerHTML);
let accordions = document.querySelectorAll('.accordion');
let bars = document.querySelector('.bars');
let nav = document.querySelector('.header-flex');
window.addEventListener('load', () => {
    
    // noOfStudents.innerHTML = 2;
    let counter = 20;
    const countUp = () => {
        if(addNoOfStud < counter && addNoOfExam < counter){
            addNoOfStud++;
            addNoOfExam++;
            noOfStudents.innerHTML = addNoOfStud;
            noOfExams.innerHTML = addNoOfExam;
        }
    }
    setInterval(countUp, 500);

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
