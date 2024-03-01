const homeImg1 = document.getElementById('homeImg1')
const homeImg2 = document.getElementById('homeImg2')
const homeImg3 = document.getElementById('homeImg3')
const homeImg4 = document.getElementById('homeImg4')

const homeNavItem1 = document.getElementById('homeNavItem1')
const homeNavItem2 = document.getElementById('homeNavItem2')
const homeNavItem3 = document.getElementById('homeNavItem3')
const bookNowButton = document.getElementById('bookNowButton')

const home = document.getElementById('home')

const logoImg = document.getElementById('logoImg')

const applyButton = document.getElementById('applyButton')

homeNavItem1.addEventListener('mouseenter', function(){
    FadeIn(homeImg2)
})
homeNavItem1.addEventListener('mouseleave', function(){
    FadeOut(homeImg2)
})

homeNavItem2.addEventListener('mouseenter', function(){
    FadeIn(homeImg4)
})
homeNavItem2.addEventListener('mouseleave', function(){
    FadeOut(homeImg4)
})

homeNavItem3.addEventListener('mouseenter', function(){
    FadeIn(homeImg3)
})
homeNavItem3.addEventListener('mouseleave', function(){
    FadeOut(homeImg3)
})

function FadeIn(img){
    homeImg1.style.opacity = 0
    img.style.opacity = 1
}

function FadeOut(img){
    homeImg1.style.opacity = 1
    img.style.opacity = 0
}

document.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('scroll', function () {
        var scrollY = window.scrollY;
        if(scrollY >= 1){
            var newMarginTop = (scrollY) / 2.5;
            homeImg1.style.marginTop = newMarginTop + 'px';
        }
    });
});

logoImg.addEventListener('click', function(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
})

bookNowButton.addEventListener('click', function(){
    window.location.href = 'catering.html'
})

applyButton.addEventListener('click', function(){
    window.location.href = 'job.html'
})