const flattenAnArrayNonRecursively = arrayToFlatten => {

    const result = [];

    const stack = arrayToFlatten;

    while (stack.length > 0) {

        const currentItem = stack[0];

        if (Array.isArray(currentItem)) {

            stack.splice(0, 1, ...currentItem);

        } else {

            result.push(currentItem);
            stack.splice(0, 1);

        }

    }

    return result;

};

module.exports = flattenAnArrayNonRecursively;
