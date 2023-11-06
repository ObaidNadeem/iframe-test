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
    const answerP = block.querySelector('.answer p');

    question.addEventListener('click', function () {
        blocks.forEach(b => {
            if (b !== block) {
                b.classList.remove('open');
                b.querySelector('.answer').style.height = null;
            }
        });

        block.classList.toggle('open');
        if (block.classList.contains('open')) {
            answer.style.height = answerP.getBoundingClientRect().height + answer.getBoundingClientRect().height + 'px';
        } else {
            answer.style.height = null;
        }
        console.log(answerP.getBoundingClientRect().height + answer.getBoundingClientRect().height )
    });
    
});

const isMobileOrTablet = /Mobi|Tablet/i.test(navigator.userAgent);
if(isMobileOrTablet)
console.log(isMobileOrTablet)