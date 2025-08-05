document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.blog-card');
  const flipSound = document.getElementById('flipSound');
  const confettiSettings = { 
    target: 'confetti-canvas', 
    props: [
      'circle',
      'square',
      'triangle',
      'line',
      { type: 'svg', src: 'my-svg-path', width: 10, height: 10 }
    ],
    colors: ['#6a4c93', 'rgb(241, 230, 166)'],
    clock: '200'
  };
  const jsConfetti = new JSConfetti(confettiSettings);

  cards.forEach(card => {
    card.addEventListener('click', () => {
      card.classList.toggle('flipped');

      // Play flip sound safely by cloning the audio element
      try {
        const soundClone = flipSound.cloneNode();
        soundClone.play();
      } catch (e) {
        console.warn('Flip sound playback failed:', e);
      }

      // Add confetti only if canvas does not already exist
      if (!document.getElementById('confetti-canvas')) {
        jsConfetti.addConfetti();
      }
    });
  });
});
