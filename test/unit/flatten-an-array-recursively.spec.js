const {expect} = require('code');
const flattenArrayRecursive = require('../../lib/flatten-an-array-recursively');

describe('Given an array to flatten recursively', () => {

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

            expect(flattenArrayRecursive(arrayToFlatten)).deep.equal(expectedArray).and.not.deep.equal(arrayToFlatten);

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

            expect(flattenArrayRecursive(arrayToFlatten)).deep.equal(expectedArray).and.not.deep.equal(arrayToFlatten);

        });

    });

});
