// const decrementButton = document.getElementById('decrement');
// const incrementButton = document.getElementById('increment');
// const countElement = document.getElementById('count');

// let count = parseInt(countElement.textContent);

// decrementButton.addEventListener('click', () => {
//     if (count > 0) {
//         count--;
//         countElement.textContent = count;
//     }
// });

// incrementButton.addEventListener('click', () => {
//     count++;
//     countElement.textContent = count;
// }); 

// Font size
const isMobileOrTablet = /Mobi|Tablet/i.test(navigator.userAgent);

if(isMobileOrTablet){
    document.body.style.fontSize = '32px';
}