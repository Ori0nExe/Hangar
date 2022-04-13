let activeDrop;
const spisk=document.querySelectorAll(".spisk")
console.log (spisk);
let i = 0;
for(let i of spisk){ i.addEventListener("click",()=>{
    const drop=i.querySelector(".drop")
    
    console.log (drop)
    drop.classList.remove("drop-hide")
    drop.setAttribute("style", "")
    drop.classList.toggle("drop-show")
    if(!drop.classList.contains("drop-show")){
        drop.classList.add("drop-hide") ;
        setTimeout(() => {
            drop.style.display = "none";
        }, 200)
    }
   
  //  drop.classList.toggle("drop-hide")

    const title = i.querySelector(".title")
    title.classList.toggle("orange")
});}
