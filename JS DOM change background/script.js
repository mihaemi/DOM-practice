
let button = document.querySelector('button')
let body = document.body
let colors = ['yellow', 'red', 'green', 'blue', 'black', 'orange', 'pink']

button.addEventListener('click', pickColor)
function pickColor(){
let color= parseInt(Math.random()*colors.length)
body.style.backgroundColor = colors[color]
}