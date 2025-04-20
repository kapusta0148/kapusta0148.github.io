const blessings = [
  "Светлого дня, полного мира и надежды!",
  "Пусть в жизни будет только радость и свет!",
  "Пусть пасхальное чудо вдохновит на добрые дела!",
  "Пусть душа поёт, а сердце ликует в этот день!",
  "Мир вашему дому и добра вам в каждый день!"
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