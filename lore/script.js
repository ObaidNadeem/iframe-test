const isMobileOrTablet = /Mobi|Tablet/i.test(navigator.userAgent);
const loreScreen = document.querySelector('#loreScreen');

if (isMobileOrTablet) {
    loreScreen.classList.add('mobile-tablet-font');
} else {
    loreScreen.classList.remove('mobile-tablet-font');
}
new Splide('.splide', {
    type: 'loop',
    perPage: 3,
    focus: 'none',
    pagination: false
}).mount();
