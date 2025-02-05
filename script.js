import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue, runTransaction } from "firebase/database";

// Конфигурация Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAY9BR5xQCB3IncsiRByuqmblXbrXeqXLI",
  authDomain: "lovekirill-4375f.firebaseapp.com",
  databaseURL: "https://lovekirill-4375f-default-rtdb.firebaseio.com", // Проверьте эту ссылку
  projectId: "lovekirill-4375f",
  storageBucket: "lovekirill-4375f.firebasestorage.app",
  messagingSenderId: "1070125583070",
  appId: "1:1070125583070:web:f0c0c01d963e4cba4cd04f",
  measurementId: "G-X6JYPTXMZ2"
};

// Инициализация Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

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

// Обработчик для сердечка
function animateHeart() {
  const heart = document.getElementById('heart');
  heart.style.transform = 'scale(0.9)';
  setTimeout(() => heart.style.transform = 'scale(1)', 200);

  // Увеличиваем счётчик в Firebase
  const likesRef = ref(database, 'likes');
  runTransaction(likesRef, (currentLikes) => (currentLikes || 0) + 1);
}

// Отслеживаем изменения в базе данных
const likesRef = ref(database, 'likes');
onValue(likesRef, (snapshot) => {
  const counter = snapshot.val() || 0;
  document.getElementById('counter').innerText = counter;
});
