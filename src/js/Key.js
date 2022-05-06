export default class Key {

    constructor() {
        this.elem = document.createElement('button')
        this.elem.classList.add('key-button')
        this.elem.setAttribute('type', 'button' )
        this.elem.value = '';
    }

    setName(name, value) {
        this.elem.classList.add(name);
        this.elem.value = value;
        this.elem.innerText = value;
    }

    getFunctionality(area) {
        this.elem.addEventListener('mousedown', function() {
            if (this.value === 'Backspace') {
            } else {
                area.value += this.value
            }
        })
    }
}