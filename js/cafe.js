document.addEventListener("DOMContentLoaded", () => {

    // --------- Per-card audio handling ---------
    document.querySelectorAll(".blog-card").forEach(card => {
        const audio = card.querySelector("#post-audio");
        const toggleBtn = card.querySelector("#post-audio-toggle");

        if (!audio || !toggleBtn) return; // Skip cards without audio/button

        // Set initial button state
        toggleBtn.textContent = audio.paused ? "Play" : "Pause";

        toggleBtn.addEventListener("click", () => {
            if (audio.paused) {
                audio.play();
                toggleBtn.textContent = "Pause";
            } else {
                audio.pause();
                toggleBtn.textContent = "Play";
            }
        });
    });

    // --------- Global background music with preference ---------
    const backgroundAudio = document.getElementById("background-audio");
    const globalToggleBtn = document.getElementById("audio-toggle");

    if (backgroundAudio && globalToggleBtn) {
        // Read saved preference
        let musicPref = localStorage.getItem("musicPreference");

        if (!musicPref) {
            const continueMusic = confirm("Would you like music to continue while reading?");
            musicPref = continueMusic ? "on" : "off";
            localStorage.setItem("musicPreference", musicPref);
        }

        // Apply preference
        if (musicPref === "off") {
            backgroundAudio.pause();
            globalToggleBtn.textContent = "Play";
        } else {
            backgroundAudio.play();
            globalToggleBtn.textContent = "Pause";
        }

        // Toggle button listener
        globalToggleBtn.addEventListener("click", () => {
            if (backgroundAudio.paused) {
                backgroundAudio.play();
                localStorage.setItem("musicPreference", "on");
                globalToggleBtn.textContent = "Pause";
            } else {
                backgroundAudio.pause();
                localStorage.setItem("musicPreference", "off");
                globalToggleBtn.textContent = "Play";
            }
        });
    }

});
