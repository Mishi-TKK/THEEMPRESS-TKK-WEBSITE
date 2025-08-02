window.onload = function () {
    console.log("The Secret Place is ready... 🔥");

    const whisperSong = document.getElementById("whisperSong");
    const victory = document.getElementById("victory");
    const whisperBtn = document.getElementById("whisper-btn");
    const message = document.getElementById("message");
    const secretGate = document.querySelector(".password-gate");

    const scriptures = [
        "**Matthew 7:13-14** - Enter by the narrow gate...",
        "**Matthew 7:7-8** - Ask, Seek, Knock...",
        "**Psalm 91:1** - He who dwells in the secret place...",
        "**Jeremiah 33:3** - Call to Me and I will answer you...",
        "**Revelation 3:20** - Behold, I stand at the door and knock..."
    ];

    // Blessings array, but we'll only use the first message for the correct passcode
    const blessings = [
        
        "Welcome to the Secret Place Remnant!,🔥** The Gates have been Opened."
    ];

    // Play background instrumental at low volume on page load
    whisperSong.volume = 0.3;
    whisperSong.loop = true;
    whisperSong.play().then(() => {
        console.log("Whisper Music Activated 🎶");
    }).catch(e => console.error("Background Audio Error:", e));

    whisperBtn.addEventListener("click", function () {
        const passcode = document.getElementById("passcode").value.toLowerCase();

        if (passcode === "remnant") {
            console.log("Welcome, Remnant 🔥");
            message.innerHTML = blessings[0]; // Only show the first blessing message
            message.classList.add("visible");

            // Hide the password form and fade out the gate
            secretGate.classList.add("fade-out");

            setTimeout(() => {
                secretGate.style.display = "none";

                // Background music will KEEP playing 🔥
                whisperSong.volume = 0.2;

                // Play Hallelujah Anthem at the same time
                victory.play().then(() => {
                    console.log("Hallelujah Anthem Released!");
                });
            }, 2000);
        } else {
            // Show random scripture when passcode is incorrect
            const randomScripture = scriptures[Math.floor(Math.random() * scriptures.length)];
            message.innerHTML = randomScripture;
            message.classList.remove("visible");
            setTimeout(() => message.classList.add("visible"), 100);

            console.log("Access Denied ❌");
        }
    });
};
