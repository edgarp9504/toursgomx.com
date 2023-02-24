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



const li        = document.querySelectorAll('.li')
const bloque    = document.querySelectorAll('.bloque')

// CLICK en li
    // TODOS .li quitar la clase activo
    // TODOS .bloque quitar la clase activo
    // .li con la posicion se añadimos la clase activo
    // .bloque con la posicion se añadimos la clase activo

// Recorriendo todos los LI
li.forEach( ( cadaLi , i )=>{
    // Asignando un CLICK a CADALI
    li[i].addEventListener('click',()=>{

        // Recorrer TODOS los .li
        li.forEach( ( cadaLi , i )=>{
            // Quitando la clase activo de cada li
            li[i].classList.remove('activo')
            // Quitando la clase activo de cada bloque
            bloque[i].classList.remove('activo')
        })
        console.log('aqui')
        // En el li que hemos click le añadimos la clase activo
        li[i].classList.add('activo')
        // En el bloque con la misma posición le añadimos la clase activo
        bloque[i].classList.add('activo')

    })
})


// SELECTORES
const selecContainer = document.getElementById('container__selector'),
      selectorShow = document.getElementById('selector_show')

let isSelectorOpen = false;

if(selecContainer){
    selecContainer.addEventListener('click', () =>{
        isSelectorOpen = !isSelectorOpen;
        if (isSelectorOpen) {
            selectorShow.classList.add('open')
        }  else {
            selectorShow.classList.remove('open')
        }
    })
}

// SCHEDULE
const selecSchedule = document.getElementById('container__schedule'),
      scheduleShow = document.getElementById('selector_show_schedule')

let isScheduleOpen = false;

if(selecSchedule){
    selecSchedule.addEventListener('click', () =>{
        isScheduleOpen = !isScheduleOpen;
        if (isScheduleOpen) {
            scheduleShow.classList.add('open')
        }  else {
            scheduleShow.classList.remove('open')
        }
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const scheduleLink = document.querySelectorAll('.nav__link')

scheduleLink.forEach(n => n.addEventListener('click', () => {
    isScheduleOpen = !isScheduleOpen;
    scheduleShow.classList.remove('open')
}))




// lenguage
const selecLenguage = document.getElementById('container__lenguage'),
      lenguageShow = document.getElementById('selector_show_lenguaje')

let isLenguageOpen = false;

if(selecLenguage){
    selecLenguage.addEventListener('click', () =>{
        isLenguageOpen = !isLenguageOpen;
        if (isLenguageOpen) {
            lenguageShow.classList.add('open')
        }  else {
            lenguageShow.classList.remove('open')
        }
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const lenguageLink = document.querySelectorAll('.nav__link')

lenguageLink.forEach(n => n.addEventListener('click', () => {
    isLenguageOpen = !isLenguageOpen;
    lenguageShow.classList.remove('open')
}))


// card title__arrow
const selectCard = document.getElementById('title__arrow'),
      cardShow = document.getElementById('card__precio'),
      arrowMov = document.getElementById('arr')

let isCardeOpen = false;

if(selectCard){
    selectCard.addEventListener('click', () =>{
        isCardeOpen = !isCardeOpen;
        console.log('Hola mundo')
        if (isCardeOpen) {
            cardShow.classList.add('open_card')
            arrowMov.classList.add('down')
        }  else {
            cardShow.classList.remove('open_card')
            arrowMov.classList.remove('down')
        }
    })
}

