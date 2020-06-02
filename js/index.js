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
    alert('You broke Fun Bus :(')
}

// dbl Click
const imageCard = document.querySelector('img');

imageCard.addEventListener('dblclick', function (event) {
    imageCard.classList.toggle('large')
})

// Select Cant seem to make this work??
function mustStop(event) {
    const selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd)
    alert('You are stealing from Fun Bus')
}

const stopStealing = document.querySelector('p')
stopStealing.addEventListener('select', mustStop)

// Mouse enter
const h1Title = document.querySelector('h1');

function changeTheTitle(event) {
    event.target.style.color = 'red'
}
h1Title.addEventListener('mouseenter', changeTheTitle)

// Mouse Down
const h2Title = document.querySelector('h2');

function changeH2Title(event) {
    event.target.style.color = 'white'
    alert('There never was an h2 here. Never will be....unless you refresh the page')
}
h2Title.addEventListener('mousedown', changeH2Title)

//