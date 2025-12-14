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
                audio.play().catch(e => {
                    console.warn("Card audio blocked until user interaction", e);
                });
                toggleBtn.textContent = "Pause";
            } else {
                audio.pause();
                toggleBtn.textContent = "Play";
            }
        });
    });

    // --------- Global background music with user preference ---------
    const backgroundAudio = document.getElementById("background-audio");
    const globalToggleBtn = document.getElementById("audio-toggle");

    if (backgroundAudio && globalToggleBtn) {
        // Read saved preference
        let musicPref = localStorage.getItem("musicPreference");

        if (!musicPref) {
            // Ask user only if no preference saved
            const continueMusic = confirm("Would you like music to continue while reading?");
            musicPref = continueMusic ? "on" : "off";
            localStorage.setItem("musicPreference", musicPref);
        }

        // Set initial button state
        if (musicPref === "off") {
            backgroundAudio.pause();
            globalToggleBtn.textContent = "Play";
        } else {
            backgroundAudio.pause(); // Start paused, will play after user interaction
            globalToggleBtn.textContent = "Pause";
        }

        // Wait for first user interaction to start audio
        let userInteracted = false;
        function enableBackgroundAudio() {
            if (userInteracted) return;
            userInteracted = true;

            if (musicPref === "on") {
                backgroundAudio.play().catch(e => {
                    console.warn("Background audio blocked until user interaction", e);
                });
            }

            document.removeEventListener("click", enableBackgroundAudio);
            document.removeEventListener("touchstart", enableBackgroundAudio);
        }

        document.addEventListener("click", enableBackgroundAudio);
        document.addEventListener("touchstart", enableBackgroundAudio);

        // Toggle button listener
        globalToggleBtn.addEventListener("click", () => {
            if (backgroundAudio.paused) {
                backgroundAudio.play().catch(e => {
                    console.warn("Background audio blocked until user interaction", e);
                });
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
