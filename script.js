function launchConfetti() {
    confetti({
        particleCount: 200, // Увеличил для большего эффекта
        spread: 90,
        origin: { y: 0.6 },
        colors: ['#ff4081', '#fad0c4', '#a18cd1'] // Под цвета сайта
    });
}

function revealMessage() {
    const message = document.getElementById('secret-message');
    if (message.style.display === 'none') {
        message.style.display = 'block';
        launchConfetti(); // Добавляем салют при открытии
    } else {
        message.style.display = 'none';
    }
}

function toggleMusic() {
    const music = document.getElementById('birthdayMusic');
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
}

function updateCountdown() {
    const targetDate = new Date("2025-08-28T00:00:00");
    const now = new Date();
    const diff = targetDate - now;

    const countdownElement = document.getElementById('countdown');

    if (diff > 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        countdownElement.innerHTML = `${days}д ${hours}ч ${minutes}м ${seconds}с`;
    } else {
        // Когда день рождения наступил, показываем таймер до конца дня
        const endDate = new Date(targetDate);
        endDate.setDate(endDate.getDate() + 1);
        const diffEnd = endDate - now;

        if (diffEnd > 0) {
            const hours = Math.floor((diffEnd % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((diffEnd % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diffEnd % (1000 * 60)) / 1000);
            countdownElement.innerHTML = `До конца дня рождения: ${hours}ч ${minutes}м ${seconds}с 🎉`;
        } else {
            countdownElement.innerHTML = "День рождения прошёл! Надеюсь, было весело! 😊";
        }
    }
}

// Автоматическая анимация и обновление таймера при загрузке
window.onload = function() {
    updateCountdown();
    setInterval(updateCountdown, 1000);
};
