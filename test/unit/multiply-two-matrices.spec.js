const {expect} = require('code');
const multiplyMatrices = require('../../lib/multiply-two-matrices');

describe('Given two matrices A & B', () => {

    describe('where the number of columns in A equals the number of rows in B', () => {

        describe('when multiplying', () => {

            it('should return a new matrix', () => {

                // @formatter:off

                const matrixA = [
                    [4, 8],
                    [0, 2],
                    [1, 6]
                ];

                const matrixB = [
                    [5, 2],
                    [9, 4]
                ];

                const expectedNewMatrix = [
                    [92, 40],
                    [18, 8],
                    [59, 26]
                ];

                // @formatter:on

                expect(multiplyMatrices(matrixA, matrixB)).array().equal(expectedNewMatrix);

            });

        });

    });

});
