let closeNavBar = document.querySelector(".close-nav-bar")
let navBar  = document.querySelector(".nav-bar")
let openNavBar  = document.querySelector(".open-nav-bar")

if(openNavBar){
    openNavBar.addEventListener('click' , ()=>{
        navBar.classList.add("open")
    })
}
if(closeNavBar){
    closeNavBar.addEventListener('click' , ()=>{
        navBar.classList.remove("open")
    })
}
