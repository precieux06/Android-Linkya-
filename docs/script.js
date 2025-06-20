const form = document.getElementById('form');
const input = document.getElementById('messageInput');
const messages = document.getElementById('messages');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const msg = input.value.trim();
  if (msg) {
    const li = document.createElement('li');
    li.textContent = msg;
    messages.appendChild(li);
    input.value = '';
  }
});
