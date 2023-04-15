// Make the toggle button display the sidebar
// and hide the sidebar when the close button is clicked
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const sidebar = document.getElementsByClassName('sidebar')[0]

toggleButton.addEventListener('change', () => {
  if (toggleButton.checked) {
    sidebar.classList.add('active');
  } else {
    sidebar.classList.remove('active');
  }
});