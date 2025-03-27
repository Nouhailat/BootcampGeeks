let NowColor="white"
let isdrawing=false
const grid=document.getElementById("grid")
for (let i = 0; i < 606; i++) {
const square=document.createElement("div")
square.classList.add("square")
grid.appendChild(square)

}
document.querySelectorAll(".color").forEach(btn=>{
    btn.addEventListener("click",function(){
        NowColor=btn.getAttribute("data-color")
        console.log("coulure choisi",NowColor)
    });
});
grid.addEventListener("mousedown",()=>isdrawing=true
)
grid.addEventListener("mouseout",()=>isdrawing=false
)
grid.addEventListener("mouseover", function (e) {
    if (isdrawing && e.target.classList.contains("square")) {
        e.target.style.background = NowColor;
    }
});
grid.addEventListener("click", function (e) {
    if (e.target.classList.contains("square")) {
        e.target.style.background = NowColor;
    }
});


