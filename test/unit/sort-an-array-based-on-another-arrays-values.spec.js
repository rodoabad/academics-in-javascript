const {expect} = require('code');
const sortArrayBasedOnSortOrder = require('../../lib/sort-an-array-based-on-another-arrays-values');

describe('Given two arrays', () => {

    describe('where the first array will be re-arranged based on each value of the second array', () => {

        it('should return a sorted array', () => {

            // @formatter:off

            const arrayToSort = ['a', 'r', 'c'];
            const arrayContainingTheSortOrder = [2, 0, 1];
            const expectedArray = ['c', 'a', 'r'];

            // @formatter:on

            expect(sortArrayBasedOnSortOrder(arrayToSort, arrayContainingTheSortOrder)).equal(expectedArray).and.not.equal(arrayToSort);

        });

    });

});
