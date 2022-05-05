import './styles/sass/main.css';

const container = document.createElement('div');
container.classList.add('container');
document.body.appendChild(container);

const title = document.createElement('h1');
title.classList.add('header-title');
container.appendChild(title);
title.innerText = 'RSS Virtual Keyboard'

const textArea = document.createElement('textarea');
textArea.rows = 5;
textArea.cols = 50;
textArea.classList.add('textarea');
container.appendChild(textArea);

const keyboard = document.createElement('div');
keyboard.classList.add('keyboard');
container.appendChild(keyboard);