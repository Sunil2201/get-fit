const loginBtn = document.querySelector('.loginBtn');
const registerBtn = document.querySelector('.registerBtn');
const loginContainer = document.querySelector('.loginContainer');
const registerContainer = document.querySelector('.registerContainer');
loginBtn.addEventListener("click",()=>{
    loginContainer.style.display = 'flex'
    registerContainer.style.display = 'none';
})
registerBtn.addEventListener("click",()=>{
    loginContainer.style.display = 'none'
    registerContainer.style.display = 'flex';
})