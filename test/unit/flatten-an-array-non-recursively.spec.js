const {expect} = require('code');
const flattenAnArrayNonRecursively = require('../../lib/flatten-an-array-non-recursively');

describe('Given an array to flatten non recursively', () => {

    describe('where it contains arrays inside', () => {

        it('should return a flattened array', () => {

            const arrayToFlatten = [
                0,
                [
                    1,
                    [
                        2,
                        [[3]]
                    ]
                ],
                4,
                [
                    5,
                    [[[6]]]
                ]
            ];

            const expectedArray = [
                0,
                1,
                2,
                3,
                4,
                5,
                6
            ];

            expect(flattenAnArrayNonRecursively(arrayToFlatten)).equal(expectedArray).and.not.equal(arrayToFlatten);

        });

    });

    describe('where it contains different types', () => {

        it('should return a flattened array', () => {

            /* eslint-disable no-undefined, quotes */

            const arrayToFlatten = [
                {},
                [],
                "",
                undefined,
                null,
                123
            ];

            const expectedArray = [
                {},
                "",
                undefined,
                null,
                123
            ];

            /* eslint-enable no-undefined, quotes */

            expect(flattenAnArrayNonRecursively(arrayToFlatten)).equal(expectedArray).and.not.equal(arrayToFlatten);

        });

    });

});
