const board = document.getElementById('board')
const colors = ['rgb(74, 36, 145)', 'rgb(80, 117, 185)', 'rgb(80, 185, 141)', 'rgb(80, 185, 94)', 'rgb(162, 211, 26)', 'rgb(26, 158, 211)']
const SQUARE_NUMBER = 600

for (let i = 0; i < SQUARE_NUMBER; i++) {
   const square = document.createElement('div')
   square.classList.add('square')

   board.append(square)

   square.addEventListener('mouseover', () => {
      addSquareColor(square)
   })

   square.addEventListener('mouseleave', () => {
      removeSquareColor(square)
   })
}

function addSquareColor(elem) {
   elem.style.backgroundColor = getRandomColor()
   elem.style.boxShadow = `0 0 2px ${getRandomColor()}, 0 0 10px ${getRandomColor()}`
}

function removeSquareColor(elem) {
   elem.style.backgroundColor = '#1d1d1d'
   elem.style.boxShadow = `0 0 2px #000`
}

function getRandomColor() {
   const index = Math.floor(Math.random() * colors.length)
   return colors[index]
}

