const toggleButton = document.getElementsByClassName('toggle-button')[0]
const sidebar = document.getElementsByClassName('sidebar')[0]

// When you click the toggleButton, the sidebar will appear. When clicked again, the sidebar will disappear.

//add active, then remove it when clicked again

toggleButton.addEventListener('click', () => {
  sidebar.classList.toggle('active')
})


// toggleButton.addEventListener('click', () => {
//   const isActive = sidebar.classList.contains('active')
//   if (isActive) {
//     sidebar.classList.remove('active')
//   }
//   sidebar.classList.toggle('active')
// }
// )
