window.addEventListener("DOMContentLoaded", () => {
    const preference = localStorage.getItem("musicPreference");

    // Handle Cafe Page
    const cafeAudio = document.getElementById("background-audio");
    const cafeButton = document.getElementById("audio-toggle");

    if (cafeAudio && cafeButton) {
        if (preference === "on") {
            cafeAudio.play().catch(() => console.log("Autoplay blocked"));
        } else {
            cafeAudio.pause();
        }

        // Set initial button text
        cafeButton.textContent = cafeAudio.paused ? "Play" : "Pause";

        cafeButton.addEventListener("click", () => {
            if (cafeAudio.paused) {
                cafeAudio.play();
                cafeButton.textContent = "Pause";
            } else {
                cafeAudio.pause();
                cafeButton.textContent = "Play";
            }
        });
    }

    // Handle Blog Post Page
    const postAudio = document.getElementById("post-audio");
    const postButton = document.getElementById("post-audio-toggle");

    if (postAudio && postButton) {
        if (preference === "on") {
            postAudio.play().catch(() => console.log("Autoplay blocked"));
        } else {
            postAudio.pause();
        }

        postButton.textContent = postAudio.paused ? "▶" : "❚❚";

        postButton.addEventListener("click", () => {
            if (postAudio.paused) {
                postAudio.play();
                postButton.textContent = "❚❚";
            } else {
                postAudio.pause();
                postButton.textContent = "▶";
            }
        });
    }

    // Ask user preference once
    if (!preference) {
        const wantsMusic = confirm("Would you like music to continue while reading?");
        localStorage.setItem("musicPreference", wantsMusic ? "on" : "off");
    }
});
