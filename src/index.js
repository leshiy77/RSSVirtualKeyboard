import './styles/sass/main.css';
import Key from './js/Key'

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

const keyboardRowOne = [
    {name: 'Backquote', value:'`', type: 'text', lang:'eng'},
    {name: 'Digit1', value:'1', type: 'text', lang:null},
    {name: 'Digit2', value:'2', type: 'text', lang:null},
    {name: 'Digit3', value:'3', type: 'text', lang:null},
    {name: 'Digit4', value:'4', type: 'text', lang:null},
    {name: 'Digit5', value:'5', type: 'text', lang:null},
    {name: 'Digit6', value:'6', type: 'text', lang:null},
    {name: 'Digit7', value:'7', type: 'text', lang:null},
    {name: 'Digit8', value:'8', type: 'text', lang:null},
    {name: 'Digit9', value:'9', type: 'text', lang:null},
    {name: 'Digit0', value:'0', type: 'text', lang:null},
    {name: 'Minus', value:'-', type: 'text', lang:null},
    {name: 'Equal', value:'=', type: 'text', lang:null},
    {name: 'Backspace', value:'Backspace', type: 'func', lang:null}
]

const keyBtnArea = document.querySelectorAll('.keyboard-row');
keyBtnArea.forEach(element => {
    switch (element.classList.contains('keyboard-row')) {
        case element.classList.contains('keyboard-row1'):
            for (let i =0; i<14;i++) {
                let nodeBtn = new Key();
                nodeBtn.setName(keyboardRowOne[i].name, keyboardRowOne[i].value);
                nodeBtn.getFunctionality(textArea);
                element.appendChild(nodeBtn.elem);
            }
        break;
        case element.classList.contains('keyboard-row2'):
            for (let i =0; i<14;i++) {
                let nodeBtn = new Key();
                element.appendChild(nodeBtn.elem);
            }
        break;
        case element.classList.contains('keyboard-row3'):
            for (let i =0; i<13;i++) {
                let nodeBtn = new Key();
                element.appendChild(nodeBtn.elem);
            }
        break;
        case element.classList.contains('keyboard-row4'):
            for (let i =0; i<13;i++) {
                let nodeBtn = new Key();
                element.appendChild(nodeBtn.elem);
            }
        break;
        case element.classList.contains('keyboard-row5'):
            for (let i =0; i<8;i++) {
                let nodeBtn = new Key();
                element.appendChild(nodeBtn.elem);
            }
        break;
    }
});


