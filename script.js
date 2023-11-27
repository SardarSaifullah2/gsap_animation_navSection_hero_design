const menuBtn = document.querySelector('.menu');
const layout = document.querySelector('.layout');
const overlay = document.querySelector('.overlay');
const menuSVG = gsap.utils.toArray('.menu svg rect');
const menuItems = gsap.utils.toArray('ul li a');

let menuOpen = false;
gsap.set(overlay, {
    scaleY: 0
})
gsap.set(menuItems, {
    yPercent:100
})
const navTl = gsap.timeline({
    defaults: {
        ease: 'power4.inOut',
        duration:1
    }
})
navTl.to(layout, {
     scale:0.95
}).to(overlay, {
     scaleY:1
}, "-=0.5").to(menuItems, {
     yPercent:0,
     stagger:0.3,
     duration:2
}, "0.75").to(menuSVG, {
     fill:'white'
}, "<").to('.line_1', {
    width:37,
    duration: 0.5,
    scaleX: 0.707107,
    scaleY: 0.707107,
    x: 0.184967,
    y: 3.13925,
    rotation: 45,
    // fill:"blue"
}, "<").to('.line_2', {
    width:37,
    duration: 0.5,
    scaleX: 0.707107,
    scaleY: -0.707107,
    x: 5.95575,
    y: 31.4397,
    rotation: -45,
    // fill:"blue"
}, "<").to('.line_3', {
    // width:37,
    duration: 2,
    fill:'transparent'
    // scaleX: 0.707107,
    // scaleY: 0.707107,
    // x: 12.8166,
    // y: 15.9179,
    // rotation: -135,

//     <svg width="37" height="32" viewBox="0 0 37 32" fill="none" xmlns="http://www.w3.org/2000/svg">
// <rect width="37" height="4.32353" rx="2.16176" transform="matrix(0.707107 0.707107 0.707107 -0.707107 0.184967 3.13922)" fill="#111111"/>
// <rect width="37.0588" height="4.32353" rx="2.16176" transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 5.95575 31.4397)" fill="#111111"/>
// </svg>

    // <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
// <rect x="12.8166" y="15.9179" width="18.5294" height="4.32353" rx="2.16176" transform="rotate(-135 12.8166 15.9179)" fill="#111111"/>
// </svg>

    // fill:"blue"
    // <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
// <rect x="12.8166" y="15.9179" width="18.5294" height="4.32353" rx="2.16176" transform="rotate(-135 12.8166 15.9179)" fill="#111111"/>
// </svg>

}, "<").to('svg', {
    attr: {
    
        viewBox:"0 0 37 32"
    }
},"<")
navTl.pause();

menuBtn.addEventListener('click', () => { 
    if (!menuOpen) {
        navTl.play()
        menuOpen=true
    } else {
        navTl.reverse()
        menuOpen=false
    }
})
