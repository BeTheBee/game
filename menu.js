export function showMenu(container, switchRoom) {
  const title = document.createElement('h1');
  title.textContent = 'Menu Room';

  const button = document.createElement('button');
  const img = document.createElement('img');
  img.src = 'assets/button_1.png';  // Your existing button image
  img.alt = 'Start Button';
  button.appendChild(img);

  button.addEventListener('click', () => {
    switchRoom('town');
  });

  container.appendChild(title);
  container.appendChild(button);
}