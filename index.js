function firstImageDown(e) {
  document.getElementById('grid-cell-1-description').style.opacity = '1'
}

function firstImageUp(e) {
  document.getElementById('grid-cell-1-description').style.opacity = '0'
}

function secondImageDown() {
    document.getElementById('grid-cell-2-description').style.opacity = '1'
}

function secondImageUp() {
document.getElementById('grid-cell-2-description').style.opacity = '0'
}

document
  .getElementById('grid-cell-1-description')
  .addEventListener('mousedown', firstImageDown)
document
  .getElementById('grid-cell-1-description')
  .addEventListener('mouseup', firstImageUp)
document
  .getElementById('grid-cell-1-description')
  .addEventListener('touchstart', firstImageDown)
document
  .getElementById('grid-cell-1-description')
  .addEventListener('touchend', firstImageUp)

function addListeners(idToSearch, ondown, onup) {
    

  document.getElementById(idToSearch).addEventListener('mousedown', ondown);
  document.getElementById(idToSearch).addEventListener('mouseup', onup);
  document.getElementById(idToSearch).addEventListener('touchstart', ondown)
  document.getElementById(idToSearch).addEventListener('touchend', onup)
}

addListeners('grid-cell-2-description', secondImageDown, secondImageUp)