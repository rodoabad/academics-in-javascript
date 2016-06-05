const {expect} = require('code');
const sortArray = require('../../lib/replace-an-arrays-indices-from-another-array');

describe('Given two arrays', () => {

    describe('where the indices of the first array will be replaced by the values from the second array', () => {

        it('should return a new array with in the right order', () => {

            // @formatter:off

            const arrayToSort = ['e', 'a', 'b', 'd', 'c'];
            const sortOrder = [4, 0, 1, 3, 2];
            const expectedArray = ['a', 'b', 'c', 'd', 'e'];

            // @formatter:on

            expect(sortArray(arrayToSort, sortOrder)).deep.equal(expectedArray).and.not.deep.equal(arrayToSort);

        });

    });

});
