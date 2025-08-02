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
            // Play Flip Sound
            flipSound.currentTime = 0; // Reset to start, in case it's already playing
            flipSound.play();
             jsConfetti.addConfetti();
        });
    });
});