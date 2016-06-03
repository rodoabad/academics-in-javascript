const multiplyTwoMatrices = (matrixA, matrixB) => {

    const newMatrix = Array.from(new Array(matrixA.length), () => []);

    matrixA.forEach((valueA, rows) => {

        matrixB.forEach((valueB, columns) => {

            let sum;

            sum = 0;

            for (const index of matrixA[0].keys()) {

                const rowToMultiply = matrixA[rows][index];
                const columnToMultiply = matrixB[index][columns];

                sum += rowToMultiply * columnToMultiply;

            }

            newMatrix[rows][columns] = sum;

        });

    });

    return newMatrix;

};

module.exports = multiplyTwoMatrices;
