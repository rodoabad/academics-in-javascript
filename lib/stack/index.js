class Stack {

    constructor() {

        this.stack = [];

    }

    peek() {

        return this.stack[this.stack.length - 1];

    }

    push(value) {

        this.stack = [
            ...this.stack,
            value
        ];

    }

    pop() {

        const top = this.stack.length - 1;

        this.stack.splice(top, 1);

    }

}

module.exports = Stack;
