// function expandBlock(){
//   const display  = document.getElementById("block")
//   if(display){
//     display.classList.remove("blockPara")
//     display.classList.add("blockDisplay")
//   }
// } 

const blocks = document.querySelectorAll(".block");

blocks.forEach(block =>{
  block.addEventListener("click", () =>{
    block.classList.toggle("active")
  })
})