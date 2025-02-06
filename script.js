const scriptUrl = 'https://script.google.com/macros/s/AKfycbxkLZf8faFWlsnsMqX8s0WlYFmpK4im6_y-zyzuvk-aaBv3fAxyahzJnpSlusNo2u-L7Q/exec';

// Таймер
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

// Получаем текущее количество лайков
async function getLikes() {
  try {
    const response = await fetch(scriptUrl);
    const likes = await response.text();
    document.getElementById('counter').innerText = likes;
  } catch (error) {
    console.error('Ошибка при загрузке лайков:', error);
  }
}

// Увеличиваем количество лайков
async function incrementLikes() {
  try {
    const response = await fetch(scriptUrl, { method: 'POST' });
    const likes = await response.text();
    document.getElementById('counter').innerText = likes;
  } catch (error) {
    console.error('Ошибка при отправке лайка:', error);
  }
}

// Обработчик для сердечка
document.getElementById('heart').addEventListener('click', () => {
  const heart = document.getElementById('heart');
  heart.style.transform = 'scale(0.9)';
  setTimeout(() => heart.style.transform = 'scale(1)', 200);
  incrementLikes();
});

// Загружаем количество лайков при загрузке страницы
getLikes();
