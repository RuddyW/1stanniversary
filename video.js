function playVideo() {
  const intro = document.getElementById('videoIntro');
  const wrapper = document.getElementById('videoWrapper');
  const video = document.getElementById('mainVideo');

  // Fade out intro
  intro.classList.add('fade-out');

  // Show video after fade and start playback
  setTimeout(() => {
    intro.style.display = 'none';
    wrapper.classList.add('show');
    video.style.display = 'block';
    video.play();
  }, 1000); // matches CSS fade timing
}
