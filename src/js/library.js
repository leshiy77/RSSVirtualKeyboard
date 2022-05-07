const keyboardRowOne = [
    {name: 'Backquote', value:'`', type: 'text', shift: '~'},
    {name: 'Digit1', value:'1', type: 'text', shift: '!'},
    {name: 'Digit2', value:'2', type: 'text', shift: '@'},
    {name: 'Digit3', value:'3', type: 'text', shift: '#'},
    {name: 'Digit4', value:'4', type: 'text', shift: '$'},
    {name: 'Digit5', value:'5', type: 'text', shift: '%'},
    {name: 'Digit6', value:'6', type: 'text', shift: '^'},
    {name: 'Digit7', value:'7', type: 'text', shift: '&'},
    {name: 'Digit8', value:'8', type: 'text', shift: '*'},
    {name: 'Digit9', value:'9', type: 'text', shift: '('},
    {name: 'Digit0', value:'0', type: 'text', shift: ')'},
    {name: 'Minus', value:'-', type: 'text', shift: '_'},
    {name: 'Equal', value:'=', type: 'text', shift: '+'},
    {name: 'Backspace', value:'Backspace', type: 'func', shift: null}
]

const keyboardRowTwo = [
    {name: 'Tab', value:'Tab', type: 'func', shift: null},
    {name: 'KeyQ', value:'q', type: 'text', shift: 'Q'},
    {name: 'KeyW', value:'w', type: 'text', shift: 'W'},
    {name: 'KeyE', value:'e', type: 'text', shift: 'E'},
    {name: 'KeyR', value:'r', type: 'text', shift: 'R'},
    {name: 'KeyT', value:'t', type: 'text', shift: 'T'},
    {name: 'KeyY', value:'y', type: 'text', shift: 'Y'},
    {name: 'KeyU', value:'u', type: 'text', shift: 'U'},
    {name: 'KeyI', value:'i', type: 'text', shift: 'I'},
    {name: 'KeyO', value:'o', type: 'text', shift: 'O'},
    {name: 'KeyP', value:'p', type: 'text', shift: 'P'},
    {name: 'BracketLeft', value:'[', type: 'text', shift: '{'},
    {name: 'BracketRight', value:']', type: 'text', shift: '}'},
    {name: 'Enter', value:'Enter', type: 'func', lang:null, shift: null}
]

const keyboardRowThree = [
    {name: 'CapsLock', value:'CapsLock', type: 'func', shift: null},
    {name: 'KeyA', value:'a', type: 'text', shift: 'A'},
    {name: 'KeyS', value:'s', type: 'text', shift: 'S'},
    {name: 'KeyD', value:'d', type: 'text', shift: 'D'},
    {name: 'KeyF', value:'f', type: 'text', shift: 'F'},
    {name: 'KeyG', value:'g', type: 'text', shift: 'G'},
    {name: 'KeyH', value:'h', type: 'text', shift: 'H'},
    {name: 'KeyJ', value:'j', type: 'text', shift: 'J'},
    {name: 'KeyK', value:'k', type: 'text', shift: 'K'},
    {name: 'KeyL', value:'l', type: 'text', shift: 'L'},
    {name: 'Semicolon', value:';', type: 'text', shift: ':'},
    {name: 'Quote', value:"'", type: 'text', shift: '"'},
    {name: 'Backslash', value: '\\', type: 'text', shift: '|'}
]

const keyboardRowFour = [
    {name: 'ShiftLeft', value:'Shift', type: 'func', shift: null},
    {name: 'KeyZ', value:'z', type: 'text', shift: 'Z'},
    {name: 'KeyX', value: 'x', type: 'text', shift: 'X'},
    {name: 'KeyC', value:'c', type: 'text', shift: 'C'},
    {name: 'KeyV', value:'v', type: 'text', shift: 'V'},
    {name: 'KeyB', value:'b', type: 'text', shift: 'B'},
    {name: 'KeyN', value:'n', type: 'text', shift: 'N'},
    {name: 'KeyM', value:'m', type: 'text', shift: 'M'},
    {name: 'Comma', value:',', type: 'text', shift: '<'},
    {name: 'Period', value:'.', type: 'text', shift: '>'},
    {name: 'Slash', value:'/', type: 'text', shift: '?'},
    {name: 'ArrowUp', value:'', type: 'func', shift: null},
    {name: 'ShiftRight', value: 'Shift', type: 'func', shift: null}
]

const keyboardRowFive = [
    {name: 'ControlLeft', value:'Ctrl', type: 'func', shift: null},
    {name: 'Delete', value:'Del', type: 'func', shift: null},
    {name: 'AltLeft', value: 'Alt', type: 'func', shift: null},
    {name: 'Space', value:'', type: 'func', shift: null},
    {name: 'AltRight', value:'Alt', type: 'func', shift: null},
    {name: 'ControlRight', value: 'Ctrl', type: 'func', shift: null},
    {name: 'ArrowLeft', value:'', type: 'func', shift: null},
    {name: 'ArrowDown', value:'', type: 'func', shift: null},
    {name: 'ArrowRight', value: '', type: 'func', shift: null}
]


export {keyboardRowOne, keyboardRowTwo, keyboardRowThree, keyboardRowFour, keyboardRowFive}
