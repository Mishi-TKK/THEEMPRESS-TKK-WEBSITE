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

            // Play flip sound using a cloned audio element for non-blocking playback
            try {
                const soundClone = flipSound.cloneNode();
                soundClone.play();
            } catch (e) {
                // Handle play error silently or log if needed
                console.warn('Flip sound playback failed:', e);
            }

            // Add confetti only if the canvas isn't already active to avoid performance issues
            if (!document.getElementById('confetti-canvas')) {
                jsConfetti.addConfetti();
            }
        });
    });
});
