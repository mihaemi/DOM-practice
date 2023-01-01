let plus = document.getElementById('increase')
let minus = document.getElementById('decrease')
let counter = document.getElementById('counter')
let initialNumber = 0
plus.addEventListener('click', increaseCounter)
function increaseCounter(){
    initialNumber++
    counter.innerHTML = initialNumber    
}
minus.addEventListener('click', decreaseCounter)
function decreaseCounter(){
    if (initialNumber >=1){
    initialNumber--
    counter.innerHTML = initialNumber
} else {
    alert('Cannot be less than 0')
}
}