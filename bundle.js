(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
let colorGrid = ['WHITE','WHITE','WHITE','WHITE','WHITE','WHITE','WHITE','WHITE','WHITE','WHITE',
'WHITE','WHITE','WHITE','WHITE','WHITE','WHITE','WHITE','WHITE','WHITE','WHITE',
'WHITE','WHITE','WHITE','WHITE','WHITE','WHITE','WHITE','WHITE','WHITE','WHITE',
'WHITE','WHITE','WHITE','WHITE','WHITE','WHITE','WHITE','WHITE','WHITE','WHITE',
'WHITE','WHITE','WHITE','WHITE','WHITE','WHITE','WHITE','WHITE','WHITE','WHITE',
'WHITE','WHITE','WHITE','WHITE','WHITE','WHITE','WHITE','WHITE','WHITE','WHITE',
'WHITE','WHITE','WHITE','WHITE','WHITE','WHITE','WHITE','WHITE','WHITE','WHITE',
'WHITE','WHITE','WHITE','WHITE','WHITE','WHITE','WHITE','WHITE','WHITE','WHITE',
'WHITE','WHITE','WHITE','WHITE','WHITE','WHITE','WHITE','WHITE','WHITE','WHITE',
'WHITE','WHITE','WHITE','WHITE','WHITE','WHITE','WHITE','WHITE','WHITE','WHITE']

let selected = 'WHITE'


module.exports = {colorGrid, selected}

},{}],2:[function(require,module,exports){
const gridColors = require('./grid-colors')
const colorGrid = gridColors.colorGrid
let selected = gridColors.selected
const render = require('./render')

document.addEventListener('DOMContentLoaded', function () {
  const grid = Array.from(document.querySelectorAll('div .border'))
  const colors = Array.from(document.querySelectorAll('div.select'))
  const indicator = Array.from(document.querySelectorAll('div .indicator'))

  render()

  colors.forEach((color) => {
    color.addEventListener('click', function (event) {
      selected = event.target.classList[1]
      console.log(selected)
      render()
      // indicator.forEach(square => square.classList.remove(Array.from(square.classList)[1]))
      // indicator.forEach(square => square.classList.add(`${selected}`))
    })
  })


  grid.forEach((square) => {
    square.addEventListener('click', function (event) {
      if (colorGrid[grid.indexOf(event.target)] === selected) {
        colorGrid[grid.indexOf(event.target)] = 'WHITE'
      } else {
      colorGrid[grid.indexOf(event.target)] = selected
      }
      render()
      // if (event.target.classList.contains(`${selected}`) === true) {
      //   event.target.classList.remove(`${selected}`)
      // } else {
      //   event.target.classList.add(`${selected}`)
      // }
    })
  })



})

},{"./grid-colors":1,"./render":3}],3:[function(require,module,exports){
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

},{"./grid-colors":1}]},{},[2]);
