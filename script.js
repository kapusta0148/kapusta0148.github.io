const blessings = [
  "Пусть дом наполнится светом, а сердце — радостью!",
  "Мира, добра и тепла тебе и твоим близким!",
  "Светлой Пасхи! Пусть чудеса случаются каждый день 🌸",
  "Пусть вера укрепляет, надежда поддерживает, любовь вдохновляет 💖",
  "Желаю радости, мира и весеннего настроения! 🐥"
];

document.getElementById('blessButton').addEventListener('click', function() {
  const blessing = document.getElementById('blessing');
  const blessingText = blessing.querySelector('p');

  const randomMessage = blessings[Math.floor(Math.random() * blessings.length)];
  blessingText.innerHTML = "Воистину Воскресе!<br>" + randomMessage;

  blessing.classList.remove('hidden');
  blessing.classList.add('visible');

  const audio = document.getElementById('easter-audio');
  if (audio && audio.paused) {
    audio.play();
  }
});