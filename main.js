let up = document.querySelector('.up')
let down = document.querySelector('.down')
let kilometr = document.querySelector('.km')
let sapas_hoda = document.querySelector('.sapas')
let origin = 750
let itog = 750

let condiz = "Кондиционер"
up.onclick = () => {
       if (kilometr.textContent < 80) {
              kilometr.textContent++
              sapas_hoda.textContent -= 20
       }
}
down.onclick = () => {
       if (kilometr.textContent > 20) {
              kilometr.textContent--
              sapas_hoda.textContent = itog += 20

       }
}

let temp = document.querySelector('.temp')
let up1 = document.querySelector('.up1')
let down1 = document.querySelector('.down1')
let temperatyra = document.querySelector('.temperartura')
up1.onclick = () => {
       temp.textContent++
       if (temp.textContent > 15) {
              temperatyra.textContent = condiz
       }
}
down1.onclick = () => {
       temp.textContent--
       if (temp.textContent <= 15) {
              temperatyra.textContent = "Печка"
       }


}

let diski = document.querySelector('.diski')
let diski1 = document.querySelector('.diski1')
let diski_h1 = document.querySelector('.diski_h1')
let diski_img = document.querySelector('.img')
let diski_img1 = document.querySelector('.img1')


diski.onclick = () => {
       diski_img.style.display = "flex"
       diski_h1.textContent = 21

}

diski1.onclick = () => {
       diski_img1.style.display = "flex"
       diski_h1.textContent = 19

}

let checkbox = document.querySelector('.checkbox')


checkbox.onclick = () => {
       if(sapas_hoda.textContent >= 750) {

              sapas_hoda.textContent -= 20
       } else if(sapas_hoda.textContent < 750) {
              
              sapas_hoda.textContent = origin
       }
       
}

let bg_modal = document.querySelector('.bg-modal')


let input = document.querySelector('.input')
let input_close = document.querySelector('.input-close')
let main = document.querySelector('.mainn')
input.onclick = () => {
      main.style.display = "none"
      bg_modal.style.display = "flex"
}

let white = document.querySelector('.btn-modal1')
let besheviy = document.querySelector('.btn-modal2')
let black = document.querySelector('.btn-modal')
let main_img = document.querySelector('.main_car')

white.onclick = () => {
       main_img.setAttribute('src', './img/white_car.png')
}
besheviy.onclick = () => {
       main_img.setAttribute('src', './img/besheviy_car.png')
}
black = () => {

}
input_close.onclick = () => {
       main.style.display = "flex"
       main.style.flexDirection = "column"
       bg_modal.style.display = "none"
}