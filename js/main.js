let closeNavBar = document.querySelector(".close-nav-bar")
let navBar  = document.querySelector(".nav-bar")
let openNavBar  = document.querySelector(".open-nav-bar")


addEventListener('click' , (e)=>{
    navBar.classList.toggle("open") 
    
})
if( navBar.classList.contains("open")){
    closeNavBar.style.display = "flex"
}