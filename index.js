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

// Автоматическая анимация при загрузке
window.onload = function() {
    // Можно добавить больше, но пока просто
};