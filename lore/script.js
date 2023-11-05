// Font size
const isMobileOrTablet = /Mobi|Tablet/i.test(navigator.userAgent);

if(isMobileOrTablet){
    document.querySelector('#loreScreen').style.fontSize = '32px';
}

new Splide('.splide', {
    type: 'loop',
    perPage: 3,
    focus: 'none',
    pagination: false
}).mount();
