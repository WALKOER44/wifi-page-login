const video = document.getElementById('bgVideo');
const soundBtn = document.getElementById('soundBtn');
const loginForm = document.getElementById('loginForm');
const errorMsg = document.getElementById('errorMsg');
const username = document.getElementById('username');
const password = document.getElementById('password');

video.muted = true;
video.volume = 1;
video.play().catch(() => {});

const enableSound = () => {
  video.muted = false;
  document.removeEventListener('pointerdown', handleFirstInteraction);
  video.play().then(() => {
    soundBtn.textContent = 'Mute';
    soundBtn.setAttribute('aria-label', 'Mute video');
  }).catch(() => {});
};

const handleFirstInteraction = (event) => {
  if (event.target !== soundBtn) enableSound();
};

document.addEventListener('pointerdown', handleFirstInteraction);

soundBtn.addEventListener('click', () => {
  if (video.muted) {
    enableSound();
    return;
  }

  video.muted = true;
  soundBtn.textContent = '🔊 Aktifkan Suara';
  soundBtn.setAttribute('aria-label', 'Aktifkan suara');
});

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const user = username.value.trim();
  const pass = password.value.trim();

  if (!user || !pass) {
    errorMsg.textContent = 'Username dan password harus diisi.';
    return;
  }

  errorMsg.textContent = '';
  const submitBtn = loginForm.querySelector('button');
  submitBtn.disabled = true;
  submitBtn.textContent = 'CONNECTING...';

  setTimeout(() => {
    alert('Login berhasil! Selamat datang di MY WIFI.');
    submitBtn.disabled = false;
    submitBtn.textContent = 'CONNECT';
  }, 1200);
});
