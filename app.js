const main = document.querySelector(".main")

let cursor = document.querySelector("#cursor")

main.addEventListener("mousemove",function(cursordets){
   cursor.style.left = cursordets.x + "px";
   cursor.style.top = cursordets.y + "px";
   
})