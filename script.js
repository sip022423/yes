const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const overlay = document.getElementById('overlay');
const overlayGif = document.getElementById('overlayGif');
const overlayTitle = document.getElementById('overlayTitle');
const overlayText = document.getElementById('overlayText');
const heartsContainer = document.querySelector('.hearts');

let yesScale = 1;
let noScale = 1;

// GIFs
const yesGif = "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExbGE4bGx2ZG4waGc5cm81NjhsZmp2amJkN2lvMWN4ZzAzMXQxaWl5cSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/11sBLVxNs7v6WA/giphy.gif";
const noGifs = [
  "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExdHV0ZHRobGZkMnhhazBkajd5OThkMndic2s0czVzdjJ5eXE5YzVsZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/1BXa2alBjrCXC/giphy.gif",
  "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExMTQ5ejJ2bTBlbjlrN2xpYXp0dnZkaDk3OHQ3MW90aHJvdnJyNXNiMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Wvo6vaUsQa3Di/giphy.gif",
    "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExejExMDRrc2oyaGZ4dWJxOXg5MW1qcGg3MnMxbm83c3BhZmNhcDkwbiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/H9nnXKNfa5wf6/giphy.gif",
  "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZDBwdmFiN2RmYzZpMG11dzlndTl1c2ZnODAzbWh1MWx3ZTNoNTJ0dyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/WK7omsLop0431tZjXb/giphy.gif",
  "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZTd2cmVrejh4bDZ0bzJzN2tzYTkyMDNneXA4and4N3FlNnFtazYxMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3oEjI80DSa1grNPTDq/giphy.gif",
  "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExdTVlMTNidXdybHg1ODdsdHMzMWVhbGo0aWV4YzFheTZ0cGYyeTlzNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/MuztdWJQ4PR7i/giphy.gif",  "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExeWQydHNsMzNiOXA4aWltYTQ2d3h1OGkwNXl4aXhodG5oZmZlMGdheSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/LTcau7EnQLhHkxxG2u/giphy.gif",
  "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZjk5bXo3YTA2YnZhMDN0NXFpcW90NXdvZmp0d3ZsamxkdWNkaXN6NiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/d7rvF20PqNuGKSQGhf/giphy.gif",
  "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExOXlkZGl5OXRheG93ZnhyeTYyNG9wejQ2cDgwaWpkNHh4cGcxajc1ciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/9Y5BbDSkSTiY8/giphy.gif",
  "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExazJuazEyNHc5NGtld3gydnJoMXRucG01dWtzMTV5ajdmY3hjd25ucCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/d2lcHJTG5Tscg/giphy.gif",
    "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExYWt5OHptYTNlMng3azJsYzB3cWFyMmJydGp1cDVsbmQyOW4yYXpzOSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/iJJ6E58EttmFqgLo96/giphy.gif",
    "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZDM4amg3YjlmbHNqOWx6OGFia29vZGdlOTYyY250N29hNmh2MjdwNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/TW8Ma1a8ZsZ8I/giphy.gif"

];

// Messages
const yesTitles = [
  "YEYEYEYYE LOVE YOU BABY KOOOOOOOOO!!!! AHEHEHEHEHEHEH 💕",
  "SEE?? YOU SAID YESSSSSS, THANK YOU HANNAH CORRE BABY😍",
  "MWAAAAAAAAH 😘",
  "YOU MADE THE RIGHT CHOICE BABY ❤️",
];
const yesMessages = [
  "Thank You wag na ikaw magalit Po! ",
  "Hehe love kita 🥰",
  "YEHEYYYYYYYYYYYYYYYY",
  "Thank you, I Love you 🌹"
];

const noTitles = [
  "ARAAAAAAAY KOOOOH! 😢",
  "SUSUMBONG KITA KAY MAMA",
  "IHHHHHHH 😭",
  "PLIZ pLSZ PLSSSSSSS please PLEASEEEEE 🥹",
  "SIGE NA PLSSSS 💕",
  "POV ME",
  "SORRY DI MARUNONG MANUYO PERO KAYA MO YAN BABY BARE WITH ME HAHAHAHA",
"ANG AKINg ENCANTADIA PRINCESS",
"PLEASEEEEEEEEEE",
"MORE SUYO TO COME",
"SORYY NA PO",
"MISS KO NA KADALDALAN KA E KASO DI AKO MADALDAL IKAW LANG NAGDADALA NAG TATAMPO KA PA"
];
const noMessages = [
  "PLSSSS BABY KOOOOOOO 🥹",
  "Patawarin mo na ako para di kita sumbong 😭",
  "HUHUHUHUHUHUHU!!!",
  "Oh Flowers Sorry na Baby 🌹",
  "One day you’ll forgive me 🥺",
  "KASI DI MO NA LOVE",
  "MWAMWA CHUPCUPPP",
  "SORRY NA CUTIEEEEE",
"LOVE YOU PANZEEEEE",
"NOOD TAYO MOVIE pLSSXXXSSSSS",
"SANA MAPATAWAD",
"HAAAAAAIIIIIXXXXXSSSSSSSTTTT"
];

let yesIndex = 0;
let noIndex = 0;

// Helpers
function randomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Yes button click → show sweet message
yesBtn.addEventListener('click', () => {
  if (yesScale < 4) {
    yesScale *= 1.2;
    yesBtn.style.setProperty('--s', yesScale);
  }

  overlayGif.src = yesGif;
  overlayTitle.textContent = yesTitles[yesIndex];
  overlayText.textContent = yesMessages[yesIndex];

  yesIndex = (yesIndex + 1) % yesTitles.length;
  overlay.classList.add('show');
});

// No button click → shrink No, grow Yes automatically, show random gif + next sad msg
noBtn.addEventListener('click', () => {
  if (noScale > 0.1) {
    noScale *= 0.8;
    noBtn.style.setProperty('--s', noScale);
  } else {
    noBtn.style.display = "none";
  }

  // Grow Yes automatically
  if (yesScale < 4) {
    yesScale *= 1.2;
    yesBtn.style.setProperty('--s', yesScale);
  }

  overlayGif.src = noGifs[noIndex];
  overlayTitle.textContent = noTitles[noIndex];
  overlayText.textContent = noMessages[noIndex];

  noIndex = (noIndex + 1) % noTitles.length;
  overlay.classList.add('show');
});

// Close overlay
overlay.addEventListener('click', () => {
  overlay.classList.remove('show');
});

// Floating hearts
function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.textContent = '❤️';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.fontSize = Math.random() * 20 + 15 + 'px';
  heart.style.animationDuration = (Math.random() * 3 + 4) + 's';

  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 6000);
}
setInterval(createHeart, 500);
