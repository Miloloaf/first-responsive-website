function addListeners(idToSearch) {
  let imgDown = () => {
    document.getElementById(idToSearch).style.opacity = '1'
  }

  let imgUp = () => {
    document.getElementById(idToSearch).style.opacity = '0'
  }

  document
    .getElementById(idToSearch)
    .addEventListener('mousedown', () => imgDown())
  document.getElementById(idToSearch).addEventListener('mouseup', () => imgUp())
  document
    .getElementById(idToSearch)
    .addEventListener('touchstart', () => imgDown())
  document
    .getElementById(idToSearch)
    .addEventListener('touchend', () => imgUp())
}

addListeners('grid-cell-1-description')
addListeners('grid-cell-2-description')
addListeners('grid-cell-3-description')
addListeners('grid-cell-4-description')
addListeners('grid-cell-5-description')
addListeners('grid-cell-6-description')
