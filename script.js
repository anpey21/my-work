const toggleButton = document.querySelector('.toggle-button');
const menu = document.querySelector('.menu');

toggleButton.addEventListener('click', () => {
  let menuLinks = document.querySelectorAll('.menu a');
  menuLinks.forEach((link) => {
  link.classList.toggle('active');
  });
});
