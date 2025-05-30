import { showMenu } from './menu.js';
import { showTown } from './town.js';

let currentRoom = 'menu';
const gameRoot = document.getElementById('game-root');

function switchRoom(newRoom) {
  currentRoom = newRoom;
  renderRoom();
}

function renderRoom() {
  gameRoot.innerHTML = '';  // Clear previous content
  if (currentRoom === 'menu') {
    showMenu(gameRoot, switchRoom);
  } else if (currentRoom === 'town') {
    showTown(gameRoot, switchRoom);
  }
}

renderRoom();