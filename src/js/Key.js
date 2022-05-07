export default class Key {

    constructor() {
        this.elem = document.createElement('button')
        this.elem.classList.add('key-button')
    }

    setKey(object) {
        this.elem.classList.add(object.name);
        this.elem.setAttribute('keyName', object.name);
        if (object.type === 'text') {
            this.elem.setAttribute('shiftName', object.shift);
            this.elem.setAttribute('lowerName', object.value)
        }
        if (object.type === 'func') {
            this.elem.classList.add(`${object.name.toLowerCase()}-key`);
        }
        this.elem.innerText = object.value;
    }
}