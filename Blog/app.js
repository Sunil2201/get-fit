//Smooth Scroll
const scroll = new SmoothScroll('#navbar a[href*="#"]',{
    speed:1300
});

//Search Box
const searchBtn = document.querySelector(".search-btn");
const cancelBtn = document.querySelector(".cancel-btn");
const searchBox = document.querySelector(".search-box");
const searchInput = document.querySelector("input")
const blogs = document.getElementById("blogs");
const heartIcon1 = document.querySelector('.like1');
const heartIcon2 = document.querySelector('.like2');
const heartIcon3 = document.querySelector('.like3');
const heartIcon4 = document.querySelector('.like4');
const heartIcon5 = document.querySelector('.like5');
if(document.body.innerHTML.indexOf('working out')>-1){
    document.write("Why did you");
}

searchBtn.addEventListener("click",()=>{
    console.log("clicked")
    searchBox.classList.add("active")
    searchInput.classList.add("active")
    searchBtn.classList.add("active")
    cancelBtn.classList.add("active")
})
cancelBtn.addEventListener('click',()=>{
    searchBox.classList.remove("active")
    searchInput.classList.remove("active")
})
heartIcon1.addEventListener('click',()=>{
    heartIcon1.innerHTML = '<i class="fas fa-heart" style="color:red"></i>'
})
heartIcon2.addEventListener('click',()=>{
    heartIcon2.innerHTML = '<i class="fas fa-heart" style="color:red"></i>'
})
heartIcon3.addEventListener('click',()=>{
    heartIcon3.innerHTML = '<i class="fas fa-heart" style="color:red"></i>'
})
heartIcon4.addEventListener('click',()=>{
    heartIcon4.innerHTML = '<i class="fas fa-heart" style="color:red"></i>'
})
heartIcon5.addEventListener('click',()=>{
    heartIcon5.innerHTML = '<i class="fas fa-heart" style="color:red"></i>'
})