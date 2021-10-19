const navToggle = document.querySelector('.nav-toggle')
const navLinks = document.querySelector('.nav__link')

navToggle.addEventListener('click', ()=> {
    document.body.classList.toggle('nav-open')
})


Array.prototype.forEach.call(navLinks, link => {
    link.addEventListener('click', ()=> {
        document.body.classList.remove('nav-open')
    })
}) 

