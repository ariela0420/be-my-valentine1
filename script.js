function answer(response) {
    const hearts = document.querySelector('.fireworks');
    const tears = document.querySelector('.tears');
    const popup = document.getElementById('popupMessage');

    // Clear previous animations
    hearts.innerHTML = '';
    tears.innerHTML = '';

    // Hide popup in case it's already visible
    popup.classList.remove('show');

    if (response === 'yes') {
        // Create hearts and sparkles
        for (let i = 0; i < 30; i++) {
            const heart = document.createElement('div');
            heart.className = 'rain-heart';
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.animationDelay = Math.random() * 1.5 + 's';
            hearts.appendChild(heart);

            const sparkle = document.createElement('div');
            sparkle.className = 'sparkle';
            sparkle.style.left = Math.random() * 100 + 'vw';
            sparkle.style.animationDelay = Math.random() * 2 + 's';
            hearts.appendChild(sparkle);
        }

        // Show popup message
        popup.classList.add('show');

        // Hide hearts and popup after 5 seconds
        setTimeout(() => {
            hearts.innerHTML = '';
            popup.classList.remove('show');
        }, 5000);

    } else {
        // Create tears
        for (let i = 0; i < 20; i++) {
            const tear = document.createElement('div');
            tear.className = 'rain-tear';
            tear.style.left = Math.random() * 100 + 'vw';
            tear.style.animationDelay = Math.random() * 2 + 's';
            tears.appendChild(tear);
        }

        setTimeout(() => {
            tears.innerHTML = '';
        }, 5000);
    }
}

// Move "no" button on hover
const noBtn = document.querySelector('.no');
noBtn.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);

    noBtn.style.position = 'absolute';
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});