function revealHero() {
  const welcome = document.getElementById('welcome');
  const hero = document.getElementById('hero');

  welcome.classList.add('fade-out');

  setTimeout(() => {
    welcome.style.display = 'none';
    hero.classList.add('show');
  }, 1500); // Match this duration with the fadeOut animation
}
