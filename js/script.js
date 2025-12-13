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
   // 🎵 Background music
if (whisperSong) {
    whisperSong.volume = 0.3;
    whisperSong.loop = true;

    whisperSong.play()
        .then(() => console.log("Whisper Music Activated 🎶"))
        .catch(e => console.error("Background Audio Error:", e));
}

// 🔐 Whisper button
if (whisperBtn) {
    whisperBtn.addEventListener("click", function () {

        const passcodeInput = document.getElementById("passcode");
        if (!passcodeInput) return;

        const passcode = passcodeInput.value.toLowerCase();

        if (passcode === "remnant") {
            console.log("Welcome, Remnant 🔥");
            message.innerHTML = blessings[0];
            message.classList.add("visible");

            secretGate.classList.add("fade-out");

            setTimeout(() => {
                secretGate.style.display = "none";

                if (whisperSong) whisperSong.volume = 0.2;

                if (victory) {
                    victory.play()
                        .then(() => console.log("Hallelujah Anthem Released!"))
                        .catch(e => console.error("Victory Error:", e));
                }
            }, 2000);

        } else {
            const randomScripture = scriptures[Math.floor(Math.random() * scriptures.length)];
            message.innerHTML = randomScripture;
            message.classList.remove("visible");
            setTimeout(() => message.classList.add("visible"), 100);
            console.log("Access Denied ❌");
        }
    });
}

// 🍔 Menu toggle (GLOBAL)
const menuToggle = document.querySelector('.menu-toggle');
const navList = document.querySelector('.nav-list');

if (menuToggle && navList) {
    menuToggle.addEventListener('click', () => {
        navList.classList.toggle('active');
        document.body.classList.toggle('nav-open');
    });
}
}