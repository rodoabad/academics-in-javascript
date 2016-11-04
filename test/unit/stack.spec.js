const Chance = require('chance');
const Stack = require('../../lib/stack');
const {expect} = require('code');

describe('Given a stack data structure', () => {

    let chance,
        myStack;

    beforeEach(() => {

        chance = new Chance();

        myStack = new Stack();

    });

    it('should have push method that allows you to add an item at the top of the stack', () => {

        const expectedValue = chance.hash();

        myStack.push(expectedValue);

        const top = myStack.stack.length - 1;

        expect(myStack.stack[top]).equal(expectedValue);

    });

    it('should have a `peek` method that shows the top value of the stack', () => {

        const expectedValue = chance.hash();

        myStack.push(expectedValue);

        expect(myStack.peek()).equal(expectedValue);

    });

    it('should have a `pop` method that allows you to remove an item at the top of the stack', () => {

        const expectedValue = chance.hash();

        myStack.push(expectedValue);
        myStack.push(chance.hash());

        myStack.pop();

        const top = myStack.stack.length - 1;

        expect(myStack.stack[top]).equal(expectedValue);

    });

});
