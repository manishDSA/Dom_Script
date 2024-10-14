function changeAboutMeText() {
    const AboutMeText=[" Web Developer","Java Developer","Full Stack Developer"]
    const typingspeed=100;
    const erasespeed=50;
    const pausetime= 1500;
    const aboutMeEelement= document.querySelector('.about-me');

  let textindex=0;
  let charindex=0;
  let isDeleting= false;

function type() {
    const currentText= AboutMeText[textindex];
    //Typing condition
    if(!isDeleting && charindex < currentText.length){
        aboutMeEelement.textContent +=currentText[charindex];
        console.log(aboutMeEelement);
        
        charindex++;
        setTimeout(type, typingspeed);
    }
//   deleting conditon
else if(isDeleting && charindex > 0){
    aboutMeEelement.textContent= currentText.substring(0,charindex - 1);
    charindex--;
    setTimeout(type,erasespeed);
}
else{
    isDeleting = !isDeleting;
    if(!isDeleting){
       textindex=(textindex+1) % AboutMeText.length;
    }
    setTimeout(type,pausetime);
}


}
type();

}


//javascript for dark-white mode
document.addEventListener('DOMContentLoaded',function () {
      
const modetoggle= document.getElementById('dark-mode-white');
const body= document.body;
modetoggle.addEventListener('click',()=>{
body.classList.toggle('dark-mode');
const currentMode= body.classList.contains('dark=-mode')?'Dark':'Light';
modetoggle.querySelector('i').classList.toggle('fa-sun');
modetoggle.querySelector('i').classList.toggle('fa-moon');
modetoggle.querySelector('i').classList.toggle('light-mode');


})
    
})


changeAboutMeText();

document.addEventListener('DOMContentLoaded',function () {
    const observer= new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                const progressbar= entry.target.querySelector('.progress-bar');
                const progress=progressbar.dataset.progress;



                progressbar.style.setProperty('--progress',`${progress}%`);
                progressbar.classList.add('animated')
                observer.unobserve(entry.target);
            }
});
    
});


const programmingskill= document.querySelectorAll('#programming-language .Skills');
programmingskill.forEach(skills =>{
    observer.observe(skills);
});





});