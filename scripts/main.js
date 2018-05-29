const gridColors = require('/grid-colors')
const colorGrid = gridColors.colorGrid
const selected = gridColors.selected
const render = require('/render')

document.addEventListener('DOMContentLoaded', function () {
  const grid = Array.from(document.querySelectorAll('div .border'))
  const colors = Array.from(document.querySelectorAll('div.select'))
  const indicator = Array.from(document.querySelectorAll('div .indicator'))
  let selected = 'WHITE'

  colors.forEach((color) => {
    color.addEventListener('click', function (event) {
      selected = event.target.classList[1]
      render()
      // indicator.forEach(square => square.classList.remove(Array.from(square.classList)[1]))
      // indicator.forEach(square => square.classList.add(`${selected}`))
    })
  })


  grid.forEach((square) => {
    square.addEventListener('click', function (event) {
      colorGrid[grid.indexOf(event.target)] = selected
      render()
      // if (event.target.classList.contains(`${selected}`) === true) {
      //   event.target.classList.remove(`${selected}`)
      // } else {
      //   event.target.classList.add(`${selected}`)
      // }
    })
  })



})
