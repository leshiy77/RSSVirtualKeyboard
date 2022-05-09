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

const infoTitle = document.createElement('h3');
infoTitle.innerHTML = 'Клавиатура сделана для Windows. Переключение языка левый alt';
container.appendChild(infoTitle);

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
const capsLockKey = document.querySelector('.capslock-key');
const altKey = document.querySelector('.altleft-key');
const controlKey = document.querySelector('.controlleft-key');

const shiftKey = (key) => {
    if (key.classList.contains('active')){
        if (altKey.classList.contains('active-lang') && controlKey.classList.contains('active-lang')) {
            keyBtn.forEach(elem => {
                if (elem.getAttribute('ru') !== null) {
                    elem.innerHTML = elem.getAttribute('ru')
                }
            })
        } else {
            keyBtn.forEach(elem => {
                if (elem.getAttribute('shiftName') !== null) {
                    elem.innerHTML = elem.getAttribute('lowerName')
                }
            })
        }
    } else {
        if (altKey.classList.contains('active-lang') && controlKey.classList.contains('active-lang')) {
            keyBtn.forEach(elem => {
                if (elem.getAttribute('rus') !== null) {
                    elem.innerHTML = elem.getAttribute('rus')
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
}

const shiftUp = () => {
    if (altKey.classList.contains('active-lang') && controlKey.classList.contains('active-lang')) {
        keyBtn.forEach(elem => {
            if (elem.getAttribute('rus') !== null) {
                elem.innerHTML = elem.getAttribute('rus')
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

const shiftDown = () => {
    if (altKey.classList.contains('active-lang') && controlKey.classList.contains('active-lang')) {
        keyBtn.forEach(elem => {
            if (elem.getAttribute('ru') !== null) {
                elem.innerHTML = elem.getAttribute('ru')
            }
        })
    } else {
        keyBtn.forEach(elem => {
            if (elem.getAttribute('shiftName') !== null) {
                elem.innerHTML = elem.getAttribute('lowerName')
            }
        })
    }
}

const changeLang = () => {
    keyBtn.forEach(elem => {
      if (controlKey.classList.contains('active-lang') && altKey.classList.contains('active-lang')) {
        if (capsLockKey.classList.contains('active')) {
            if (elem.getAttribute('shiftName') !== null) {
                elem.innerHTML = elem.getAttribute('shiftName')
            }
        } else {
            if (elem.getAttribute('lowerName') !== null) {
                elem.innerHTML = elem.getAttribute('lowerName')
            }
        }
      } else {
        if (capsLockKey.classList.contains('active')) {
            if (elem.getAttribute('rus') !== null) {
                elem.innerHTML = elem.getAttribute('rus')
            }
        } else {
            if (elem.getAttribute('ru') !== null) {
                elem.innerHTML = elem.getAttribute('ru')
            }
        }
      }
    })
}

let textValue = textArea.value.split('')

window.addEventListener('keydown', function(event) {
    event.preventDefault() 
    for (let i =0; i < keyBtn.length; i++) {    
        if (event.code === keyBtn[i].getAttribute('keyName')) {
            if (event.code === 'CapsLock') {
                shiftKey(keyBtn[i])
                keyBtn[i].classList.toggle('active');
            } else if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
                shiftUp();
                keyBtn[i].classList.add('active');
            } else {
                keyBtn[i].classList.add('active');
            }
        }
    }
    keyBtn.forEach(elem => {
        if (event.code === elem.getAttribute('keyName')) {
            if (elem.getAttribute('type') === 'text') {
                let position = textArea.selectionStart;
                textValue.splice(textArea.selectionStart, 0, elem.textContent);
                textArea.value = textValue.join('');
                textArea.selectionEnd = position +1;
            }
            if (elem.getAttribute('type') === 'func') {
                if (elem.getAttribute('keyName') === 'Space') {
                    let position = textArea.selectionStart;
                    textValue.splice(textArea.selectionStart, 0, ' ');
                    textArea.value = textValue.join('');
                    textArea.selectionEnd = position +1;
                }
                if (elem.getAttribute('keyName') === 'Tab') {
                    let position = textArea.selectionStart;
                    for (let i=0;i<4;i++) {
                        textValue.splice(textArea.selectionStart, 0, ' ');
                    }
                    textArea.value = textValue.join('');
                    textArea.selectionEnd = position +4;
                }
                if (elem.getAttribute('keyName') === 'Enter') {
                    let position = textArea.selectionStart;
                    textValue.splice(textArea.selectionStart, 0, '\n');
                    textArea.value = textValue.join('');
                    textArea.selectionEnd = position +1;
                }
                if (elem.getAttribute('keyName') === 'Backspace') {
                    if (textArea.selectionStart !== 0) {
                        let position = textArea.selectionStart;
                        textValue.splice(textArea.selectionStart-1, 1);
                        textArea.value = textValue.join('');
                        textArea.selectionEnd = position - 1;
                    }
                }
                if (elem.getAttribute('keyName') === 'Delete') {
                    if (textArea.selectionStart !== textArea.length) {
                        let position = textArea.selectionStart;
                        textValue.splice(textArea.selectionStart, 1);
                        textArea.value = textValue.join('');
                        textArea.selectionEnd = position;
                    }
                }
                if (elem.getAttribute('keyName') === 'ArrowUp') {
                    let position = textArea.selectionStart;
                    textArea.selectionEnd = textArea.value.length - position;
            
                }
                if (elem.getAttribute('keyName') === 'ArrowDown') {
                    let position = textArea.selectionStart;
                    textArea.selectionStart = textArea.value.length + position;
            
                }
                if (elem.getAttribute('keyName') === 'ArrowLeft') {
                    if(textArea.selectionStart !== 0) {
                        let position = textArea.selectionStart;
                        textArea.selectionEnd = position - 1;
                    }
                }
                if (elem.getAttribute('keyName') === 'ArrowRight') {
                    if(textArea.selectionStart !== textArea.value.length) {
                        let position = textArea.selectionStart;
                        textArea.selectionStart = position + 1;
                    }
                }
                if (elem.getAttribute('keyName') === 'AltLeft') {
                    changeLang();
                    altKey.classList.toggle('active-lang')
                    controlKey.classList.toggle('active-lang')
                }
            }
        }
    })
})

window.addEventListener('keyup', function(event) {
    event.preventDefault()
    for (let i =0; i < keyBtn.length; i++) {
        if (event.code === keyBtn[i].getAttribute('keyName') && event.code !== 'CapsLock') {
            if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
                shiftDown();
            }
            keyBtn[i].classList.remove('active');
        }
    }
})

keyBtn.forEach(elem => {
    elem.addEventListener('mousedown', function(event) {
        if (event.which === 1) {
            if (elem.getAttribute('type') === 'text') {
                let position = textArea.selectionStart;
                textValue.splice(textArea.selectionStart, 0, elem.textContent);
                textArea.value = textValue.join('');
                textArea.selectionEnd = position +1;
            }
            if (elem.getAttribute('type') === 'func') {
                if (elem.getAttribute('keyName') === 'Space') {
                    let position = textArea.selectionStart;
                    textValue.splice(textArea.selectionStart, 0, ' ');
                    textArea.value = textValue.join('');
                    textArea.selectionEnd = position +1;
                }
                  if (elem.getAttribute('keyName') === 'Tab') {
                    let position = textArea.selectionStart;
                    for (let i=0;i<4;i++) {
                        textValue.splice(textArea.selectionStart, 0, ' ');
                    }
                    textArea.value = textValue.join('');
                    textArea.selectionEnd = position +4;
                }
                if (elem.getAttribute('keyName') === 'Enter') {
                    let position = textArea.selectionStart;
                    textValue.splice(textArea.selectionStart, 0, '\n');
                    textArea.value = textValue.join('');
                    textArea.selectionEnd = position +1;
                }
                if (elem.getAttribute('keyName') === 'Backspace') {
                    if (textArea.selectionStart !== 0) {
                        let position = textArea.selectionStart;
                        textValue.splice(textArea.selectionStart-1, 1).join('');
                        textArea.value = textValue.join('');
                        textArea.selectionEnd = position - 1;
                    }
                }
                if (elem.getAttribute('keyName') === 'Delete') {
                    if (textArea.selectionStart !== textArea.length) {
                        let position = textArea.selectionStart;
                        textValue.splice(textArea.selectionStart, 1).join('');
                        textArea.value = textValue.join('');
                        textArea.selectionEnd = position;
                    }
                }
                if (elem.getAttribute('keyName') === 'ArrowUp') {
                    let position = textArea.selectionStart;
                    textArea.selectionEnd = textArea.value.length - position;
            
                }
                if (elem.getAttribute('keyName') === 'ArrowDown') {
                    let position = textArea.selectionStart;
                    textArea.selectionStart = textArea.value.length + position;
            
                }
                if (elem.getAttribute('keyName') === 'ArrowLeft') {
                    if(textArea.selectionStart !== 0) {
                        let position = textArea.selectionStart;
                        textArea.selectionEnd = position - 1;
                    }
                }
                if (elem.getAttribute('keyName') === 'ArrowRight') {
                    if(textArea.selectionStart !== textArea.value.length) {
                        let position = textArea.selectionStart;
                        textArea.selectionStart = position + 1;
                    }
                }
                if (elem.getAttribute('keyName') === 'CapsLock') {
                    shiftKey(elem)
                    elem.classList.toggle('active');
                }
                if (elem.getAttribute('keyName') === 'ShiftLeft' || elem.getAttribute('keyName') === 'ShiftRight') {
                    shiftUp()
                }
                if (elem.getAttribute('keyName') === 'AltLeft') {
                    changeLang();
                    altKey.classList.toggle('active-lang')
                    controlKey.classList.toggle('active-lang')
                }
            }
        }
    })
})

keyBtn.forEach(elem => {
    elem.addEventListener('mouseup', function(event) {
        if (event.which === 1) {
            if (elem.getAttribute('keyName') === 'ShiftLeft' || elem.getAttribute('keyName') === 'ShiftRight') {
                shiftDown()
            }
        }
    })
})

