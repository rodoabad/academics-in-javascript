const {expect} = require('code');
const flattenArrayRecursive = require('../../lib/flatten-an-array-recursively');

describe('Given an array to flatten', () => {

    describe('where it contains arrays inside ', () => {

        it('should return a flattened array', () => {

            const arrayToFlatten = [
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

});
