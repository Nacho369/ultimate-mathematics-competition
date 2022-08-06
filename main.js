
const header = document.querySelector('header');
const navLinks = document.querySelectorAll('.navLinks li');

window.addEventListener('scroll', () => {
    if(this.scrollY > 100){
        header.classList.add("headerBg");
        navLinks.forEach(navLink => {
            navLink.classList.add("navChg");
        });
        
    }
    else{
        header.classList.remove("headerBg");
        navLinks.forEach(navLink => {
            navLink.classList.remove("navChg");
        });
    }
})


let noOfStudents = document.querySelector('.noOfStudents');
let noOfExams = document.querySelector('.noOfExams');
let addNoOfStud = parseInt(noOfStudents.innerHTML);
let addNoOfExam = parseInt(noOfExams.innerHTML);
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
    setInterval(countUp, 1000);
    
})
