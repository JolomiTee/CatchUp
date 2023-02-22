const navbar = document.getElementById('navbar')
window.addEventListener('scroll', ()=> {
    if(window.scrollY > 20){
        navbar.classList.add('navbar')
    } else{
        navbar.classList.remove('navbar')
    }
})

const navButton = document.getElementById('navButton')
const navCloseButton = document.getElementById('navCloseButton')
const mobileNav = document.getElementById('mobileNav')

navButton.addEventListener('click', ()=>{
    mobileNav.classList.remove('hidden')
})
navCloseButton.addEventListener('click', ()=>{
    mobileNav.classList.add('hidden')
})
