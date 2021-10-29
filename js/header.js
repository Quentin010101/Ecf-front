const btnBurger = document.querySelector('.burger')
const nav2 = document.querySelector('.nav2')
const wrapper = document.querySelector('.wrapper')
const btnCroix = document.querySelector('.croix')
const line = document.querySelectorAll('hr')
let index = 0


// ----------------  Bouton burger -------------------------
btnBurger.addEventListener('click', function(){
    nav2.classList.toggle('agrandirNav')
    wrapper.classList.toggle('agrandirWrapper')
    btnBurger.classList.toggle('rotateBurger')

    line.forEach( function(e){
        e.classList.toggle('agrandirLine')   
    });
})

// ----------------  Bouton croix -------------------------
btnCroix.addEventListener('click', function(){
    nav2.classList.toggle('agrandirNav')
    wrapper.classList.toggle('agrandirWrapper')
    btnBurger.classList.toggle('rotateBurger')
    
    line.forEach( function(e){
        e.classList.toggle('agrandirLine')   
    });
})