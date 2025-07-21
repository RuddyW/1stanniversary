function playVideo() {
  const intro = document.getElementById('videoIntro');
  const video = document.getElementById('videoWrapper');

  // Fade out intro
  intro.classList.add('fade-out');

  // Show video after intro fades
  setTimeout(() => {
    intro.style.display = 'none';
    video.classList.add('show');
  }, 1000); // matches CSS fade timing
}
