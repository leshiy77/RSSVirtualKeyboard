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
textArea.focus();

const keyboard = document.createElement('div');
keyboard.classList.add('keyboard');
container.appendChild(keyboard);

const keyboardRow = document.createElement('div');
keyboardRow.classList.add('keyboard-row')
for (let i=0; i<5; i++) {
    let node = keyboardRow.cloneNode();
    node.classList.add(`keyboard-row${i+1}`);
    keyboard.appendChild(node)
}

const keyBtn = document.createElement('button');
keyBtn.classList.add('key-button');
const keyBtnArea = document.querySelectorAll('.keyboard-row');
keyBtnArea.forEach(element => {
    switch (element.classList.contains('keyboard-row')) {
        case element.classList.contains('keyboard-row1'):
            for (let i =0; i<13;i++) {
                let nodeBtn = keyBtn.cloneNode();
                element.appendChild(nodeBtn);
            }
        break;
        case element.classList.contains('keyboard-row2'):
            for (let i =0; i<14;i++) {
                let nodeBtn = keyBtn.cloneNode();
                element.appendChild(nodeBtn);
            }
        break;
        case element.classList.contains('keyboard-row3'):
            for (let i =0; i<13;i++) {
                let nodeBtn = keyBtn.cloneNode();
                element.appendChild(nodeBtn);
            }
        break;
        case element.classList.contains('keyboard-row4'):
            for (let i =0; i<13;i++) {
                let nodeBtn = keyBtn.cloneNode();
                element.appendChild(nodeBtn);
            }
        break;
        case element.classList.contains('keyboard-row5'):
            for (let i =0; i<8;i++) {
                let nodeBtn = keyBtn.cloneNode();
                element.appendChild(nodeBtn);
            }
        break;
    }
});
