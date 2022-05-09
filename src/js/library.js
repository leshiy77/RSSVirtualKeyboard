const keyboardRowOne = [
    {name: 'Backquote', value:'`', type: 'text', shift: '~', ru: 'ё', rus: 'Ё'},
    {name: 'Digit1', value:'1', type: 'text', shift: '!', ru: '1', rus: '!'},
    {name: 'Digit2', value:'2', type: 'text', shift: '@', ru: '2', rus: '"'},
    {name: 'Digit3', value:'3', type: 'text', shift: '#', ru: '3', rus: '№'},
    {name: 'Digit4', value:'4', type: 'text', shift: '$', ru: '4', rus: ';'},
    {name: 'Digit5', value:'5', type: 'text', shift: '%', ru: '5', rus: '%'},
    {name: 'Digit6', value:'6', type: 'text', shift: '^', ru: '6', rus: ':'},
    {name: 'Digit7', value:'7', type: 'text', shift: '&', ru: '7', rus: '?'},
    {name: 'Digit8', value:'8', type: 'text', shift: '*', ru: '8', rus: '*'},
    {name: 'Digit9', value:'9', type: 'text', shift: '(', ru: '9', rus: '('},
    {name: 'Digit0', value:'0', type: 'text', shift: ')', ru: '0', rus: ')'},
    {name: 'Minus', value:'-', type: 'text', shift: '_', ru: '-', rus: '_'},
    {name: 'Equal', value:'=', type: 'text', shift: '+', ru: '=', rus: '+'},
    {name: 'Backspace', value:'Backspace', type: 'func', shift: null, ru: null, rus: null}
]

const keyboardRowTwo = [
    {name: 'Tab', value:'Tab', type: 'func', shift: null, ru: null, rus: null},
    {name: 'KeyQ', value:'q', type: 'text', shift: 'Q', ru: 'й', rus: 'Й'},
    {name: 'KeyW', value:'w', type: 'text', shift: 'W', ru: 'ц', rus: 'Ц'},
    {name: 'KeyE', value:'e', type: 'text', shift: 'E', ru: 'у', rus: 'У'},
    {name: 'KeyR', value:'r', type: 'text', shift: 'R', ru: 'к', rus: 'К'},
    {name: 'KeyT', value:'t', type: 'text', shift: 'T', ru: 'е', rus: 'Е'},
    {name: 'KeyY', value:'y', type: 'text', shift: 'Y', ru: 'н', rus: 'Н'},
    {name: 'KeyU', value:'u', type: 'text', shift: 'U', ru: 'г', rus: 'Г'},
    {name: 'KeyI', value:'i', type: 'text', shift: 'I', ru: 'ш', rus: 'Ш'},
    {name: 'KeyO', value:'o', type: 'text', shift: 'O', ru: 'щ', rus: 'Щ'},
    {name: 'KeyP', value:'p', type: 'text', shift: 'P', ru: 'з', rus: 'З'},
    {name: 'BracketLeft', value:'[', type: 'text', shift: '{', ru: 'х', rus: 'Х'},
    {name: 'BracketRight', value:']', type: 'text', shift: '}', ru: 'ъ', rus: 'Ъ'},
    {name: 'Enter', value:'Enter', type: 'func', lang:null, shift: null, ru: null, rus: null}
]

const keyboardRowThree = [
    {name: 'CapsLock', value:'CapsLock', type: 'func', shift: null, ru: null, rus: null},
    {name: 'KeyA', value:'a', type: 'text', shift: 'A', ru: 'ф', rus: 'Ф'},
    {name: 'KeyS', value:'s', type: 'text', shift: 'S', ru: 'ы', rus: 'Ы'},
    {name: 'KeyD', value:'d', type: 'text', shift: 'D', ru: 'в', rus: 'В'},
    {name: 'KeyF', value:'f', type: 'text', shift: 'F', ru: 'а', rus: 'А'},
    {name: 'KeyG', value:'g', type: 'text', shift: 'G', ru: 'п', rus: 'П'},
    {name: 'KeyH', value:'h', type: 'text', shift: 'H', ru: 'р', rus: 'Р'},
    {name: 'KeyJ', value:'j', type: 'text', shift: 'J', ru: 'о', rus: 'О'},
    {name: 'KeyK', value:'k', type: 'text', shift: 'K', ru: 'л', rus: 'Л'},
    {name: 'KeyL', value:'l', type: 'text', shift: 'L', ru: 'д', rus: 'Д'},
    {name: 'Semicolon', value:';', type: 'text', shift: ':', ru: 'ж', rus: 'Ж'},
    {name: 'Quote', value:"'", type: 'text', shift: '"', ru: 'э', rus: 'Э'},
    {name: 'Backslash', value: '\\', type: 'text', shift: '|', ru: '\\', rus: '/'} 
]

const keyboardRowFour = [
    {name: 'ShiftLeft', value:'Shift', type: 'func', shift: null, ru: null, rus: null},
    {name: 'KeyZ', value:'z', type: 'text', shift: 'Z', ru: 'я', rus: 'Я'},
    {name: 'KeyX', value: 'x', type: 'text', shift: 'X', ru: 'ч', rus: 'Ч'},
    {name: 'KeyC', value:'c', type: 'text', shift: 'C', ru: 'с', rus: 'С'},
    {name: 'KeyV', value:'v', type: 'text', shift: 'V', ru: 'м', rus: 'М'},
    {name: 'KeyB', value:'b', type: 'text', shift: 'B', ru: 'и', rus: 'И'},
    {name: 'KeyN', value:'n', type: 'text', shift: 'N', ru: 'т', rus: 'Т'},
    {name: 'KeyM', value:'m', type: 'text', shift: 'M', ru: 'ь', rus: 'Ь'},
    {name: 'Comma', value:',', type: 'text', shift: '<', ru: 'б', rus: 'Б'},
    {name: 'Period', value:'.', type: 'text', shift: '>', ru: 'ю', rus: 'Ю'},
    {name: 'Slash', value:'/', type: 'text', shift: '?', ru: '.', rus: ','},
    {name: 'ArrowUp', value:'', type: 'func', shift: null, ru: null, rus: null},
    {name: 'ShiftRight', value: 'Shift', type: 'func', shift: null, ru: null, rus: null}
]

const keyboardRowFive = [
    {name: 'ControlLeft', value:'Ctrl', type: 'func', shift: null, ru: null, rus: null},
    {name: 'Delete', value:'Del', type: 'func', shift: null, ru: null, rus: null},
    {name: 'AltLeft', value: 'Alt', type: 'func', shift: null, ru: null, rus: null},
    {name: 'Space', value:'', type: 'func', shift: null, ru: null, rus: null},
    {name: 'AltRight', value:'Alt', type: 'func', shift: null, ru: null, rus: null},
    {name: 'ControlRight', value: 'Ctrl', type: 'func', shift: null, ru: null, rus: null},
    {name: 'ArrowLeft', value:'', type: 'func', shift: null, ru: null, rus: null},
    {name: 'ArrowDown', value:'', type: 'func', shift: null, ru: null, rus: null},
    {name: 'ArrowRight', value: '', type: 'func', shift: null, ru: null, rus: null}
]


export {keyboardRowOne, keyboardRowTwo, keyboardRowThree, keyboardRowFour, keyboardRowFive}
