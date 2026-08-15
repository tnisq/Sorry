// Fixed pool, created once. CSS handles the infinite looping from here —
// no JS timers keep running, so it can't build up memory or ever stop.
const sky = document.getElementById('sky');
const words = [
  { text: 'sorry', cls: 'sorry' },
  { text: 'iloveyouu', cls: 'love' }
];
const COUNT = 55;

for (let i = 0; i < COUNT; i++){
  const pick = words[Math.floor(Math.random() * words.length)];
  const el = document.createElement('div');
  el.className = 'drop ' + pick.cls;
  el.textContent = pick.text;

  const size = pick.cls === 'love' ? (1 + Math.random() * 2) : (0.8 + Math.random() * 2.2);
  const duration = 4 + Math.random() * 7;
  const left = Math.random() * 100;
  const opacity = 0.2 + Math.random() * 0.6;
  const negDelay = -(Math.random() * duration); // starts mid-fall, staggered
  const sway = (Math.random() - 0.5) * 40;

  el.style.left = left + 'vw';
  el.style.fontSize = size + 'rem';
  el.style.setProperty('--o', opacity);
  el.style.setProperty('--sway', sway + 'px');
  el.style.animationDuration = duration + 's';
  el.style.animationDelay = negDelay + 's';

  sky.appendChild(el);
}