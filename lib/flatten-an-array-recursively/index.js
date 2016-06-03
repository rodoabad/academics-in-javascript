const flattenArrayRecursive = arrayToFlatten =>
    arrayToFlatten.reduce((newArray, item) =>
            newArray.concat(Array.isArray(item) ?
                            flattenArrayRecursive(item) :
                            item)

        , []);

module.exports = flattenArrayRecursive;
