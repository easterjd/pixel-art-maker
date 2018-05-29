const gridColors = require('./grid-colors')
const colorGrid = gridColors.colorGrid
const selected = gridColors.selected

function render () {
  const grid = Array.from(document.querySelectorAll('div .border'))
  const indicator = Array.from(document.querySelectorAll('div .indicator'))

  for (let i = 0; i < colorGrid.length; i++) {
    let square = colorGrid[i]
    if (Array.from(grid[i].classList).length === 3) {
      grid[i].classList.remove(Array.from(grid[i].classList)[2])
    }
    grid[i].classList.add(colorGrid[i])
  }
  indicator.forEach( square => {
    if (Array.from(square.classList).length === 2) {
      square.classList.remove(Array.from(square.classList)[1])
    }
    square.classList.add(selected)
  })
}


module.exports = render
