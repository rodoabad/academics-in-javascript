const quickSort = arrayToSort => {

    if (arrayToSort.length === 0) {

        return [];

    }

    const [pivot, ...otherItems] = arrayToSort;

    return [
        ...quickSort(otherItems.filter(current => current < pivot)),
        pivot,
        ...quickSort(otherItems.filter(current => current >= pivot))
    ];

};

module.exports = quickSort;
