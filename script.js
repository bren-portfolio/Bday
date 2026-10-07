const PASSWORD = "061226";

const lockscreen = document.getElementById("lockscreen");
const lockCard = document.getElementById("lockCard");
const passwordForm = document.getElementById("passwordForm");
const passwordInput = document.getElementById("passwordInput");
const errorMessage = document.getElementById("errorMessage");

const website = document.getElementById("website");
const backgroundMusic = document.getElementById("backgroundMusic");

const startButton = document.getElementById("startButton");
const galleryButton = document.getElementById("galleryButton");
const fullGallery = document.getElementById("fullGallery");

const messageButton = document.getElementById("messageButton");
const messageCard = document.getElementById("messageCard");

const letterButton = document.getElementById("letterButton");
const letterCard = document.getElementById("letterCard");

const videoButton = document.getElementById("videoButton");
const videoCard = document.getElementById("videoCard");

const wishButton = document.getElementById("wishButton");
const wishCard = document.getElementById("wishCard");



passwordForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const enteredPassword = passwordInput.value.trim();

    if (enteredPassword === PASSWORD) {

        errorMessage.textContent = "";

        lockCard.classList.add("success");

        // Start music while the password submission is still
        // considered a user interaction
        if (backgroundMusic) {
            backgroundMusic.volume = 0.45;

            backgroundMusic.play().catch(function (error) {
                console.log("Music autoplay was blocked:", error);
            });
        }

        setTimeout(function () {

            lockscreen.classList.add("hide");
            website.classList.remove("hidden");

            document.body.style.overflow = "auto";

        }, 650);

    } else {

        errorMessage.textContent = "Wrong password BABY :(  Try again. ♡";

        passwordInput.value = "";

        passwordInput.focus();

        passwordInput.animate(
            [
                { transform: "translateX(0)" },
                { transform: "translateX(-8px)" },
                { transform: "translateX(8px)" },
                { transform: "translateX(-8px)" },
                { transform: "translateX(0)" }
            ],
            {
                duration: 350
            }
        );

    }

});


/* =========================
   BEGIN BUTTON
========================= */

if (startButton) {

    startButton.addEventListener("click", function () {

        document.getElementById("memories").scrollIntoView({
            behavior: "smooth"
        });

    });

}


/* =========================
   GALLERY
========================= */

if (galleryButton) {

    galleryButton.addEventListener("click", function () {

        fullGallery.classList.toggle("hidden");

        if (!fullGallery.classList.contains("hidden")) {

            galleryButton.innerHTML =
                'Hide Pictures <span>↑</span>';

            setTimeout(function () {

                fullGallery.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }, 100);

        } else {

            galleryButton.innerHTML =
                'See More Pictures <span>→</span>';

        }

    });

}


/* =========================
   MESSAGE
========================= */

if (messageButton) {

    messageButton.addEventListener("click", function () {

        messageCard.classList.toggle("hidden");

        if (!messageCard.classList.contains("hidden")) {

            messageButton.innerHTML =
                'Hide Message <span>↑</span>';

            setTimeout(function () {

                messageCard.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });

            }, 100);

        } else {

            messageButton.innerHTML =
                'Read Something ♡';

        }

    });

}


/* =========================
   LETTER
========================= */

if (letterButton) {

    letterButton.addEventListener("click", function () {

        letterCard.classList.toggle("hidden");

        if (!letterCard.classList.contains("hidden")) {

            letterButton.innerHTML =
                'Close My Letter <span>↑</span>';

            setTimeout(function () {

                letterCard.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }, 100);

        } else {

            letterButton.innerHTML =
                'Open My Letter <span>♡</span>';

        }

    });

}


/* =========================
   VIDEO
========================= */

if (videoButton) {

    videoButton.addEventListener("click", function () {

        videoCard.classList.toggle("hidden");

        if (!videoCard.classList.contains("hidden")) {

            videoButton.innerHTML =
                'Hide Surprise <span>↑</span>';

            setTimeout(function () {

                videoCard.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });

            }, 100);

        } else {

            videoButton.innerHTML =
                'Open the Surprise <span>✦</span>';

        }

    });

}


/* =========================
   WISH
========================= */

if (wishButton) {

    wishButton.addEventListener("click", function () {

        wishCard.classList.remove("hidden");

        wishButton.innerHTML =
            "Wish Made ♡";

        wishButton.disabled = true;

        createConfetti();

        setTimeout(function () {

            wishCard.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

        }, 100);

    });

}


/* =========================
   CONFETTI
========================= */

function createConfetti() {

    const symbols = ["♡", "♥", "✦", "✧"];

    for (let i = 0; i < 45; i++) {

        const piece = document.createElement("span");

        piece.textContent =
            symbols[Math.floor(Math.random() * symbols.length)];

        piece.style.position = "fixed";
        piece.style.left = Math.random() * 100 + "%";
        piece.style.top = "-30px";
        piece.style.zIndex = "999";
        piece.style.color = "#e7a9c2";
        piece.style.fontSize =
            12 + Math.random() * 12 + "px";
        piece.style.pointerEvents = "none";

        const duration = 2 + Math.random() * 2;

        piece.style.transition =
            `transform ${duration}s linear, opacity ${duration}s linear`;

        document.body.appendChild(piece);

        setTimeout(function () {

            piece.style.transform =
                `translateY(${window.innerHeight + 100}px) rotate(${Math.random() * 500}deg)`;

            piece.style.opacity = "0";

        }, 50);

        setTimeout(function () {

            piece.remove();

        }, duration * 1000 + 200);

    }

}