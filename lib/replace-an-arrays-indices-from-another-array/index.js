const sortArray = (arrayToSort, sortOrder) => {

    const result = [];

    for (let i = 0; i < arrayToSort.length; i += 1) {

        result[sortOrder[i]] = arrayToSort[i];

    }

    return result;

};

module.exports = sortArray;
