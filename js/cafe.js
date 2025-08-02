document.addEventListener("DOMContentLoaded", () => {
    const audio = document.getElementById("background-audio");
    const button = document.getElementById("audio-toggle");

    if (!audio || !button) {
        console.error("Audio or button not found!");
        return;
    }

    button.addEventListener("click", () => {
        if (audio.paused) {
            audio.play();
            button.textContent = "Pause";
        } else {
            audio.pause();
            button.textContent = "Play";
        }
    });

    // Ensure button reflects the correct state when page loads
    button.textContent = audio.paused ? "Play" : "Pause";
});

window.addEventListener("DOMContentLoaded", () => {
    const audio = document.getElementById("background-audio");
    const toggleBtn = document.getElementById("audio-toggle");

    // Store user's preference
    if (!localStorage.getItem("musicPreference")) {
        const continueMusic = confirm("Would you like music to continue while reading?");
        localStorage.setItem("musicPreference", continueMusic ? "on" : "off");
    }

    // Audio toggle button
    toggleBtn.addEventListener("click", () => {
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
    });
});
