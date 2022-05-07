import './styles/sass/main.css';
import Key from './js/Key';

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
textArea.focus()

window.addEventListener('click', function() {
    textArea.focus()
})

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

import {keyboardRowOne, keyboardRowTwo, keyboardRowThree, keyboardRowFour, keyboardRowFive} from './js/library';

const keyBtnArea = document.querySelectorAll('.keyboard-row');
keyBtnArea.forEach(element => {
    switch (element.classList.contains('keyboard-row')) {
        case element.classList.contains('keyboard-row1'):
            for (let i =0; i<14;i++) {
                let nodeBtn = new Key();
                nodeBtn.setKey(keyboardRowOne[i]);
                element.appendChild(nodeBtn.elem);
            }
        break;
        case element.classList.contains('keyboard-row2'):
            for (let i =0; i<14;i++) {
                let nodeBtn = new Key();
                nodeBtn.setKey(keyboardRowTwo[i]);
                element.appendChild(nodeBtn.elem);
            }
        break;
        case element.classList.contains('keyboard-row3'):
            for (let i =0; i<13;i++) {
                let nodeBtn = new Key();
                nodeBtn.setKey(keyboardRowThree[i]);
                element.appendChild(nodeBtn.elem);
            }
        break;
        case element.classList.contains('keyboard-row4'):
            for (let i =0; i<13;i++) {
                let nodeBtn = new Key();
                nodeBtn.setKey(keyboardRowFour[i]);
                element.appendChild(nodeBtn.elem);
            }
        break;
        case element.classList.contains('keyboard-row5'):
            for (let i =0; i<9;i++) {
                let nodeBtn = new Key();
                nodeBtn.setKey(keyboardRowFive[i]);
                element.appendChild(nodeBtn.elem);
            }
        break;
    }
});

const keyBtn = document.querySelectorAll('.key-button');

const shiftKey = (key) => {
    if (key.classList.contains('active')){
        keyBtn.forEach(elem => {
            if (elem.getAttribute('shiftName') !== null) {
                elem.innerHTML = elem.getAttribute('lowerName')
            }
        })
    } else {
        keyBtn.forEach(elem => {
            if (elem.getAttribute('shiftName') !== null) {
                elem.innerHTML = elem.getAttribute('shiftName')
            }
        })
    }
}

window.addEventListener('keydown', function(event) {
    for (let i =0; i < keyBtn.length; i++) {
        if (event.code === keyBtn[i].getAttribute('keyName')) {
            if (event.code === 'CapsLock') {
                shiftKey(keyBtn[i])
                keyBtn[i].classList.toggle('active');
            } else if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
                keyBtn.forEach(elem => {
                    if (elem.getAttribute('shiftName') !== null) {
                        elem.innerHTML = elem.getAttribute('shiftName')
                    }
                })
                keyBtn[i].classList.add('active');
            } else {
                keyBtn[i].classList.add('active');
            }
        }
    }
})

window.addEventListener('keyup', function(event) {
    for (let i =0; i < keyBtn.length; i++) {
        if (event.code === keyBtn[i].getAttribute('keyName') && event.code !== 'CapsLock') {
            if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
                keyBtn.forEach(elem => {
                    if (elem.getAttribute('shiftName') !== null) {
                        elem.innerHTML = elem.getAttribute('lowerName')
                    }
                })
            }
            keyBtn[i].classList.remove('active');
        }
    }
})



