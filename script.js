const toggleButton = document.getElementsByClassName('toggle-button')[0]
const menu = document.getElementsByClassName('menu')[0]

// Code to begin with the menu hidden and open it when the button is clicked



toggleButton.addEventListener('click', () => {
  menu.classList.toggle('active')
})

// How to close the menu when a link is clicked

const menuLinks = document.querySelectorAll('.menu a')
menuLinks.forEach(
  function(menuLink) {
    menuLink.addEventListener('click', () => {
      menu.classList.remove('active')
    })
  }
)

