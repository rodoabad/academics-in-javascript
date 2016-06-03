const {expect} = require('code');
const findSquareRoot = require('../../lib/find-the-square-root-using-babylonian-method');

describe('Given the square root of a non-negative number', () => {

    describe('when finding the square root of 9', () => {

        it('should also be a non-negative number', () => {

            const number = 9;
            const expectedSquareRoot = 3;

            expect(findSquareRoot(number)).number().equal(expectedSquareRoot);

        });

    });

    describe('when finding the square root of 8', () => {

        it('should also be a non-negative number', () => {

            const number = 8;
            const expectedSquareRoot = 2.82842712474619;

            expect(findSquareRoot(number)).number().equal(expectedSquareRoot);

        });

    });

});
