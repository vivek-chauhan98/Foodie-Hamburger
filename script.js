const hamburgerMenu = document.querySelector('.hamburger-menu')
const openMenuBox = document.querySelector('.open-menu-box')
const closeTab = document.querySelector('.close-tab')
const openMenuListItems = document.querySelector('open-menu-lists li')
const goTop = document.querySelector('.go-top')
const one = document.querySelectorAll('.one')
const two = document.querySelectorAll('.two')
const three = document.querySelectorAll('.three')
const four = document.querySelectorAll('.four')
const five = document.querySelectorAll('.five')
const menuOne = document.querySelector('.menu-top')
const menuTwo = document.querySelector('.menu-whopper')
const menuThree = document.querySelector('.menu-stunner')
const menuFour = document.querySelector('.menu-newfoddie')
const menuFive= document.querySelector('.menu-deal')




hamburgerMenu.addEventListener('click', () => {    
    hamburgerMenu.style.display = 'none'
    openMenuBox.style.display = 'flex'  
})

closeTab.addEventListener('click', () => {
    openMenuBox.style.display = 'none'
    hamburgerMenu.style.display = 'flex'
})

goTop.addEventListener('click', () => {
    window.scrollTo(0,0)
})

one.forEach((el) => {
    el.addEventListener('click', () => {
        let y = menuOne.offsetTop
        window.scrollTo(0,y)
    })
})

two.forEach((el) => {
    el.addEventListener('click', () => {
        let y = menuTwo.offsetTop
        window.scrollTo(0,y)
    })
})

three.forEach((el) => {
    el.addEventListener('click', () => {
        let y = menuThree.offsetTop
        window.scrollTo(0,y)
    })
})

four.forEach((el) => {
    el.addEventListener('click', () => {
        let y = menuFour.offsetTop
        window.scrollTo(0,y)
    })
})

five.forEach((el) => {
    el.addEventListener('click', () => {
        let y = menuFive.offsetTop
        window.scrollTo(0,y)
    })
})

