const findSquareRoot = (number, guess) => {

    const overEstimate = guess ?
                         guess :
                         number / 2.0;

    const underEstimate = number / overEstimate;

    const newOverEstimate = (overEstimate + underEstimate) / 2.0;

    return overEstimate === newOverEstimate ?
           overEstimate :
           findSquareRoot(number, newOverEstimate);

};

module.exports = findSquareRoot;
