const startDate = new Date('2025-01-28T06:00:00');

function updateTimer() {
    const now = new Date();
    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById('timer').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

setInterval(updateTimer, 1000);

let counter = 0;

function animateHeart() {
    const heart = document.getElementById('heart');
    heart.style.transform = 'scale(0.9)';
    setTimeout(() => {
        heart.style.transform = 'scale(1)';
    }, 200);

    counter++;
    document.getElementById('counter').innerText = counter;

    // Здесь можно добавить код для синхронизации счётчика с сервером
    // Например, отправлять данные на сервер и обновлять счётчик для всех пользователей
}

// Пример синхронизации счётчика (нужно реализовать серверную часть)
// fetch('/updateCounter', { method: 'POST', body: JSON.stringify({ counter }) })
//     .then(response => response.json())
//     .then(data => {
//         document.getElementById('counter').innerText = data.counter;
//     });
