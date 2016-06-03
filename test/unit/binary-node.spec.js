const {expect} = require('code');
const BinaryNode = require('../../lib/binary-node');

describe('Given a binary node', () => {

    describe('when creating a node without passing a value', () => {

        let binaryNode;

        beforeEach(() => {

            binaryNode = new BinaryNode();

        });

        it('should initialize with a value of null', () => {

            expect(binaryNode.value).null();

        });

        it('should have initialize its left node with null', () => {

            expect(binaryNode.left).null();

        });

        it('should have initialize its right node with null', () => {

            expect(binaryNode.right).null();

        });

    });

    describe('when creating a node and passing a value', () => {

        let binaryNode;

        beforeEach(() => {

            binaryNode = new BinaryNode(0);

        });

        it('should initialize with a value of 0', () => {

            expect(binaryNode.value).number().equals(0);

        });

        it('should have initialize its left node with null', () => {

            expect(binaryNode.left).null();

        });

        it('should have initialize its right node with null', () => {

            expect(binaryNode.right).null();

        });

    });

});
