// function expandBlock(){
//   const display  = document.getElementById("block")
//   if(display){
//     display.classList.remove("blockPara")
//     display.classList.add("blockDisplay")
//   }
// } 

// const blocks = document.querySelectorAll(".block");

// blocks.forEach(block =>{
//   block.addEventListener("click", () =>{
//     blocks.forEach(b => b.classList.remove("active")); // Remove "active" from all blocks
//     block.classList.add("active"); // Add "active" to the clicked block
//   })
// })

// Add this script to your script.js file

const blocks = document.querySelectorAll('.block');

blocks.forEach(block => {
    const question = block.querySelector('.question');
    const answer = block.querySelector('.answer');

    question.addEventListener('click', function () {
        blocks.forEach(b => {
            if (b !== block) {
                b.classList.remove('open');
                b.querySelector('.answer').style.maxHeight = null;
            }
        });

        block.classList.toggle('open');
        if (block.classList.contains('open')) {
            answer.style.maxHeight = answer.scrollHeight + 'px';
        } else {
            answer.style.maxHeight = null;
        }
    });
});

// use diff css
const isMobileOrTablet = /Mobi|Tablet/i.test(navigator.userAgent);

if (!isMobileOrTablet) {
    // Load a different stylesheet for non-mobile and non-tablet devices
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = './style.css';
    document.head.appendChild(link);
} else {
    // Load a different stylesheet for mobile and tablet devices
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = './mobileStyle.css';
    document.head.appendChild(link);
}