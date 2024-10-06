function toggleMenu() {
  const menu = document.querySelector('.menu-links');
  const icon = document.querySelector('.burger-icon');
  menu.classList.toggle('open');
  icon.classList.toggle('open');
};

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  location.hash = sectionId;
  section.scrollIntoView({ behavior: 'smooth' });
};
