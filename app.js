const toggleBtn = document.getElementById('toggleMenu');
const sidebar = document.querySelector('.sidebar');
const mainContent = document.querySelector('.main-content');

toggleBtn.addEventListener('click', () => {
  sidebar.classList.toggle('active');
  mainContent.classList.toggle('expanded');
});