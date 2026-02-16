document.addEventListener('DOMContentLoaded', () => {
    // --- Countdown Timer Logic ---
    // Set the date we're counting down to: Feb 17, 2026 at 5:00 PM
    const countDownDate = new Date("Feb 17, 2026 17:00:00").getTime();

    // Update the count down every 1 second
    const x = setInterval(function () {
        const now = new Date().getTime();
        const distance = countDownDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("days").innerHTML = days < 10 ? '0' + days : days;
        document.getElementById("hours").innerHTML = hours < 10 ? '0' + hours : hours;
        document.getElementById("minutes").innerHTML = minutes < 10 ? '0' + minutes : minutes;
        document.getElementById("seconds").innerHTML = seconds < 10 ? '0' + seconds : seconds;

        if (distance < 0) {
            clearInterval(x);
            document.getElementById("timer").innerHTML = "HAPPY BIRTHDAY!";
        }
    }, 1000);


    // --- RSVP Logic ---
    const yesBtn = document.getElementById('yes-btn');
    const noBtn = document.getElementById('no-btn');
    const rsvpContent = document.getElementById('rsvp-content');
    const thankYouMessage = document.getElementById('thank-you-message');

    yesBtn.addEventListener('click', () => {
        // Trigger Confetti
        confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#ff6b81', '#f8c291', '#82ccdd', '#ffffff']
        });

        // Show thank you message
        rsvpContent.classList.add('hidden');
        thankYouMessage.classList.remove('hidden');
        thankYouMessage.style.animation = 'scaleIn 0.5s forwards';
    });

    // "No" button evasion logic
    noBtn.addEventListener('mouseover', () => {
        const i = Math.floor(Math.random() * (window.innerWidth - noBtn.clientWidth));
        const j = Math.floor(Math.random() * (window.innerHeight - noBtn.clientHeight));

        noBtn.style.position = 'fixed'; // Use fixed to move freely relative to viewport
        noBtn.style.left = i + 'px';
        noBtn.style.top = j + 'px';
        noBtn.style.zIndex = '1000'; // Ensure it's on top
    });

    noBtn.addEventListener('click', () => {
        // Just in case they manage to click it
        alert("Nice try! But you really should come! 😉");
    });

    // --- Background Balloon Generator ---
    const balloonContainer = document.getElementById('balloon-container');
    const colors = ['#d4af37', '#bdc3c7', '#cd6155']; // Gold, Silver, Dark Red

    function createBalloon() {
        const balloon = document.createElement('div');
        balloon.classList.add('balloon');

        // Random position and properties
        const left = Math.random() * 100;
        const animationDuration = Math.random() * 5 + 10; // 10-15s
        const scale = Math.random() * 0.5 + 0.8; // Bigger balloons: 0.8 - 1.3 scale
        const color = colors[Math.floor(Math.random() * colors.length)];

        balloon.style.left = `${left}%`;
        balloon.style.animationDuration = `${animationDuration}s`;
        balloon.style.transform = `scale(${scale})`;
        balloon.style.setProperty('--balloon-color', color);

        balloonContainer.appendChild(balloon);

        // Remove balloon after animation
        setTimeout(() => {
            balloon.remove();
        }, animationDuration * 1000);
    }

    // Create balloons periodically
    setInterval(createBalloon, 800);
});
