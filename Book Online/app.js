let today = new Date().toISOString().substr(0, 10);
document.querySelector("#today").value = today;
const bookMenu = document.querySelector(".book");
const alertBtn = document.querySelector(".alertBtn")
const leftBtn = document.querySelector(".left")
const rightBtn = document.querySelector(".right")
rightBtn.addEventListener("click",()=>{
    document.querySelector('#today').stepUp(1);
})
leftBtn.addEventListener("click",()=>{
    document.querySelector("#today").stepDown(1);    
})
window.addEventListener("scroll",()=>{
    bookMenu.classList.add("active")
})
alertBtn.addEventListener("click",()=>{
    swal("Sorry, this service can’t be booked online just yet. Please get in touch.");
})
