new Splide('.splide', {
    type: 'loop',
    perPage: 3,
    focus: 'none',
    pagination: false
}).mount();

const isMobileOrTablet = /Mobi|Tablet/i.test(navigator.userAgent);

if (isMobileOrTablet) {
    document.querySelector('#loreHeading h1').style.fontSize = '275%';
    document.querySelector('#lore-card h1').style.fontSize = '150%';
    document.querySelector('#lore-content p').style.fontSize = '175%';
    document.querySelector('.loreCloseBtn h1').style.fontSize = '125%';
}
