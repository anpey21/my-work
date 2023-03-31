const toggleButton = document.getElementsByClassName('toggle-button')[0]
const menu = document.getElementsByClassName('menu')[0]

// Code to begin with the menu hidden and open it when the button is clicked



toggleButton.addEventListener('click', () => {
  menu.classList.toggle('active')
})
