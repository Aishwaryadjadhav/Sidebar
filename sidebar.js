// function toggleHide(){
//     let btn=document.getElementById('btn')
//     let para=document.getElementById('para')
//     if(para.style.display!='none')
//     {
//         para.style.display='none'
//     }
//     else{
//         para.style.display='block'
//     }
    

   
// }

let btn = document.getElementById("btn")
console.log(btn);

btn.addEventListener("click",() => {
    let ul = document.getElementsByTagName("ul")
    console.log(ul);
    console.log(ul[0]);
    let display = ul[0].classList.toggle("block")
    if(display){
        ul[0].style.translate="-150px"
        ul[0].style.transitionDuration="5s"
    }else{
        ul[0].style.translate="1px"
        ul[0].style.transitionDuration="5s"

    }
})








