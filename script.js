const hamburgerMenu = document.querySelector('.hamburger-menu')
const sideMenu = document.querySelector('.side-menu')
const closeTab = document.querySelector('.close-tab')
const goTop = document.querySelector('.go-top')
const mainContainer = document.querySelector('.main-container')
const logo = document.querySelector('.logo')
const menuLists = document.querySelectorAll('.side-menu a')


hamburgerMenu.addEventListener('click', () => {    
    hamburgerMenu.style.display = 'none'
    sideMenu.style.right = '24px'    
})

closeTab.addEventListener('click', () => {    
    sideMenu.style.right = '-340px' 
    hamburgerMenu.style.display = 'flex'
})

goTop.addEventListener('click', () => {
    mainContainer.scrollTo(0,0)
})

logo.addEventListener('click', () => {
    mainContainer.scrollTo(0,0)
})

menuLists.forEach((el) => {
    el.addEventListener('click', () => {
        setTimeout(() => {
            sideMenu.style.right = '-340px' 
            hamburgerMenu.style.display = 'flex'
        }, 700)        
    })
})

