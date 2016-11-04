const {expect} = require('code');
const quickSort = require('../../lib/quick-sort');

describe('Given the quick sort algorithm', () => {

    it('should be able to sort an array of numbers', () => {

        const arrayToSort = [
            2,
            3,
            1
        ];

        const expectedSortedArray = [
            1,
            2,
            3
        ];

        const actualSortedArray = quickSort(arrayToSort);

        expect(actualSortedArray).array().equal(expectedSortedArray);

    });

});
