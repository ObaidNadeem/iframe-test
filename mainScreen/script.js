// Font size
const isMobileOrTablet = /Mobi|Tablet/i.test(navigator.userAgent);

if(isMobileOrTablet){
    document.body.style.fontSize = '32px';
}