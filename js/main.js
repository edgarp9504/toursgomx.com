/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('main__nav'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

let isMenuOpen = false;

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        isMenuOpen = !isMenuOpen;
        if (isMenuOpen) {
            navMenu.classList.add('show-menu')
        }  else {
            navMenu.classList.remove('show-menu')
        }
    })
}


/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('main__nav')
    isMenuOpen = !isMenuOpen;
    // When we click on each nav__link, we remove the show-menu class

    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))