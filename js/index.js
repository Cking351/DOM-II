// Your code goes here
// Click
const bottomButton = document.querySelector('.btn')

function uhOh(event) {
    alert('Congragulations. You clicked a button. Want a medal?')
}
bottomButton.addEventListener('click', uhOh)

// Mouse Over
const myNav = document.querySelector('.nav')

function SoManyColors(event) {
    event.target.style.color = 'orange';
}
myNav.addEventListener('mouseover', SoManyColors)

// Mouse Out 
function goodbyeColor(event) {
    event.target.style.color = 'red'
}
bottomButton.addEventListener('mouseout', goodbyeColor)

// Keydown
document.addEventListener('keydown', logKey)

function logKey(event) {
    alert('You broke FunBus :(')
}

// dbl Click
const imageCard = document.querySelector('img');

imageCard.addEventListener('dblclick', function (event) {
    imageCard.classList.toggle('large')
})