function answer(response) {
    const fireworks = document.querySelector('.fireworks');
    const tears = document.querySelector('.tears');

    fireworks.innerHTML = '';
    tears.innerHTML = '';

    if (response === 'yes') {
        for (let i = 0; i < 20; i++) {
            const f = document.createElement('div');
            f.className = 'firework';
            f.style.left = Math.random() * 100 + '%';
            f.style.top = Math.random() * 100 + '%';
            f.style.setProperty('--x', Math.random());
            f.style.setProperty('--y', Math.random());
            fireworks.appendChild(f);
        }
    } else {
        for (let i = 0; i < 10; i++) {
            const t = document.createElement('div');
            t.className = 'tear';
            t.style.left = Math.random() * 100 + '%';
            tears.appendChild(t);
        }
    }
}