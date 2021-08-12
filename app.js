//Smooth Scroll
const scroll = new SmoothScroll('#navbar a[href*="#"]',{
    speed:1300
});
//Visual effects
function scrollAppear(){
    var introText = document.querySelector('.animateheading')
    var introPosition = introText.getBoundingClientRect().top;
    var introImg1 = document.querySelector('.img1')
    var introPosition1 = introImg1.getBoundingClientRect().top; 
    var introImg2 = document.querySelector('.img2')
    var introPosition2 = introImg2.getBoundingClientRect().top;
    var screenPosition = window.innerHeight;
    console.log(introPosition1);
    console.log(screenPosition);
    if(introPosition<screenPosition){
        introText.classList.add('animateheading-appear');
    }
    if(introPosition1<screenPosition){  
        introImg1.classList.add('img1-appear');
    }
    if(introPosition2<screenPosition){ 
        introImg2.classList.add('img2-appear');
    }
}
window.addEventListener('scroll',scrollAppear)
//Refresh event
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}


